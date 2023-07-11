<?php

namespace ModStart\Core\Util;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Jenssegers\Agent\Facades\Agent;

/**
 * @Util
 */
class AgentUtil
{
    /**
     * @Util 获取浏览器UserAgent
     * @return string
     */
    public static function getUserAgent()
    {
        return Request::header('User-Agent');
    }

    /**
     * @Util 判断浏览器类型
     * @return string pc, mobile
     */
    public static function device()
    {
        if (self::isMobile()) {
            return 'mobile';
        }
        return 'pc';
    }

    /**
     * @Util 判断是否是微信浏览器
     * @return bool
     */
    public static function isWechat()
    {
        static $isWechat = null;
        if (null === $isWechat) {
            $userAgent = Request::header('User-Agent');
            if (strpos($userAgent, 'MicroMessenger') !== false) {
                $isWechat = true;
            } else {
                $isWechat = false;
            }
        }
        return $isWechat;
    }

    /**
     * @Util 判断是否是手机浏览器
     * @return bool
     */
    public static function isMobile()
    {
        return Agent::isPhone() || Agent::isTablet();
    }

    /**
     * @Util 判断是否是电脑浏览器
     * @return bool
     */
    public static function isPC()
    {
        return !Agent::isPhone() && !Agent::isTablet();
    }

    private static $robots = [
        '/Googlebot/i' => 'Google',
        '/Baiduspider/i' => 'Baidu',
        '/360Spider/i' => '360',
        '/Sogou/i' => 'Sogou',
        '/bingbot/i' => 'Bing',
        '/Bytespider/i' => 'TouTiao',
        '/YisouSpider/i' => 'Yisou',

        '/duckduckgo\\.com/i' => 'Other',
        '/DotBot/i' => 'Other',
        '/AhrefsBot/i' => 'Other',
        '/SemrushBot/i' => 'Other',
        '/GeedoBot/i' => 'Other',
        '/AwarioBot/i' => 'Other',
        '/MJ12bot/i' => 'Other',
        '/Apache\\-HttpClient/i' => 'Other',
        '/github\\-camo/i' => 'Other',
        '/python\\-http/i' => 'Other',
        '/Go\\-http\\-client/i' => 'Other',
        '/msray/i' => 'Other',
        '/crawler/i' => 'Other',
        '/spider/i' => 'Other',
    ];

    public static function detectRobot($userAgent = null)
    {
        if (null === $userAgent) {
            $userAgent = AgentUtil::getUserAgent();
        }
        foreach (self::$robots as $regex => $robot) {
            if (preg_match($regex, $userAgent)) {
                return $robot;
            }
        }
        return null;
    }

}
