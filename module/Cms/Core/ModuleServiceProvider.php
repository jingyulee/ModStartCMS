<?php

namespace Module\Cms\Core;

use Illuminate\Events\Dispatcher;
use Illuminate\Support\ServiceProvider;
use ModStart\Admin\Config\AdminMenu;
use ModStart\Admin\Widget\DashboardItemA;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Util\TreeUtil;
use ModStart\Layout\Row;
use Module\Cms\Provider\CmsHomePageProvider;
use Module\Cms\Util\CmsModelUtil;
use Module\Vendor\Admin\Config\AdminWidgetDashboard;
use Module\Vendor\Admin\Config\AdminWidgetLink;
use Module\Vendor\Provider\HomePage\HomePageProvider;

class ModuleServiceProvider extends ServiceProvider
{
    
    public function boot(Dispatcher $events)
    {
        require_once __DIR__ . '/../Helpers/CMS.php';

        AdminWidgetLink::register(function () {
            $menu = [];
            $menu[] = ['首页', modstart_web_url('cms')];
            $tree = TreeUtil::modelToTree('cms_cat', ['title' => 'title', 'url' => 'url']);
            $categories = TreeUtil::treeToListWithIndent($tree, 'id', 'title', 0, ['url']);
            $menu = array_merge($menu, array_map(function ($record) {
                return [
                    '栏目:' . $record['title'],
                    modstart_web_url($record['url'] ? $record['url'] : 'c/' . $record['id']),
                ];
            }, $categories));
            return [
                AdminWidgetLink::build('CMS', $menu)
            ];
        });

        AdminMenu::register(function () {
            $models = CmsModelUtil::all();
            $contentMenus = [];
            foreach ($models as $model) {
                $contentMenus[] = [
                    'title' => $model['title'],
                    'rule' => 'CmsContentManage' . $model['id'],
                    'url' => action('\Module\Cms\Admin\Controller\ContentController@index', ['modelId' => $model['id']]),
                ];
            }
            return [
                [
                    'title' => 'CMS管理',
                    'icon' => 'credit',
                    'sort' => 150,
                    'children' => [
                        [
                            'title' => 'CMS内容',
                            'children' => $contentMenus
                        ],
                        [
                            'title' => 'CMS配置',
                            'children' => [

                                [
                                    'title' => '模型管理',
                                    'url' => '\Module\Cms\Admin\Controller\ModelController@index',
                                ],
                                [
                                    'title' => '模板管理',
                                    'url' => '\Module\Cms\Admin\Controller\TemplateController@index',
                                ],
                                [
                                    'title' => '栏目管理',
                                    'url' => '\Module\Cms\Admin\Controller\CatController@index',
                                ],
                            ]
                        ],
                        [
                            'title' => '企业信息设置',
                            'url' => '\Module\Cms\Admin\Controller\ConfigController@basic',
                        ],
                    ]
                ],
            ];
        });

        AdminWidgetDashboard::registerIcon(function (Row $row) {
            $models = CmsModelUtil::all();
            foreach ($models as $model) {
                $row->column(3, DashboardItemA::makeIconNumberTitle(
                    'iconfont icon-details', ModelUtil::count('cms_content', ['modelId' => $model['id']]), $model['title'],
                    modstart_admin_url('cms/content/' . $model['id'])
                ));
            }
            $row->column(3, DashboardItemA::makeIconNumberTitle(
                'iconfont icon-list-alt', ModelUtil::count('cms_cat'), '栏目数',
                modstart_admin_url('cms/cat')
            ));
            $row->column(3, DashboardItemA::makeIconNumberTitle(
                'iconfont icon-credit',
                ModelUtil::count('cms_model'),
                '模型数',
                modstart_admin_url('cms/model')
            ));
        });

        HomePageProvider::register(CmsHomePageProvider::class);

    }

    
    public function register()
    {

    }
}
