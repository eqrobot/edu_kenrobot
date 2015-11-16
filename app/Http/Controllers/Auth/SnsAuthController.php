<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Auth;
use Session;
use App\User;
use Curl\Curl;

class SnsAuthController extends Controller
{


    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
      //  $this->middleware('guest', ['except' => 'getLogout']);
        $this->redirectPath = '/';
        $this->loginPath = '/auth/snslogin';        
    }

 



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function snsLogin(Request $request)
    {
        $uid = $request->input('uid');
        $token = $request->input('token');

        

        $data = $this->getUserinfo($token);
        if ($data == null) {
            return redirect('/');//跳转根目录
        }

        $userInfo = array_only($data,['uid','uname','email','avatar_big']);

        $userInfo['name'] = $userInfo['uname'];
        unset($userInfo['uname']);

        $userInfo['avatar_url'] = $userInfo['avatar_big'];
        unset($userInfo['avatar_big']);

        $user = $this->getUser($userInfo);
        if ($user == null) {
           $user = $this->createUser($userInfo);
        }
        Auth::login($user,false);
        return redirect('/');

    }   

    /**
     * 使用sns账号密码登录
     */
    public function snsPostLogin(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        if (empty($email) || empty($password)) {
            redirect('/login');
        }

        $data = $this->validateSnsUser($email,$password);
        if ($data == null) {
            return redirect('/');//跳转根目录
        }
        // dd($data);
        $userInfo = array_only($data,['uid','uname','email','avatar_big']);

        $userInfo['name'] = $userInfo['uname'];
        unset($userInfo['uname']);

        $userInfo['avatar_url'] = isset($userInfo['avatar_big']) ? $userInfo['avatar_big'] : '';
        unset($userInfo['avatar_big']);

        $user = $this->getUser($userInfo);
        if ($user == null) {
           $user = $this->createUser($userInfo);
        }
        Auth::login($user,true);
        return redirect('/');



    }



    /**
     * 验证sns账号密码
     */
    private function validateSnsUser($email,$password){

        $url = config('sns.validate.url');
        // $url = 'http://localhost:8800/N1CwG46Ml';
        $referer = config('sns.validate.referer');
        $key = config('sns.key');


        // echo $url,$referer,$key;

        $curl = new Curl();
        $curl->setReferrer($referer);

        $data = $curl->post($url,[
            'key' => $key,
            'email' => $email,
            'password' => $password
            ]);
       
            $userData = json_decode($data,true);
            return $userData;
    }


    private function getUserinfo($token = '')
    {

        $url = config('sns.userinfo.url');
        $referer = config('sns.userinfo.referer');
        $key = config('sns.key');

        $curl = new Curl();
        $curl->setReferrer($referer);
        $data = $curl->post($url,[
            'key' => $key,
            'token' => $token
            ]);
        $userData = json_decode($data,true);

        return $userData;
    }


    private function getFakeUserinfo($token = '')
    {
        $name = str_random();

        return ['name' => $name,
                'email' => $name.'@qq.com',
                'password' => $name,
                'uid'   => rand(1,99999)
        ];
    }


    /**
     * 获取本地用户
     */
    private function getUser($data = array()){
        if (!isset($data['uid'])) {
            return null;
        }

        $user = User::where('uid',$data['uid'])->first();
        return $user;
    }


    /**
     * 创建用户
     */
    private function createUser($data = array())
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['email'].'321'),
            'uid'   => $data['uid'],
            'avatar_url' => $data['avatar_url'],
            'source'   => 'sns'
        ]);
    }



}
