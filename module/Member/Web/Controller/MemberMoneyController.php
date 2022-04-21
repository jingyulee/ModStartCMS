<?php


namespace Module\Member\Web\Controller;


use ModStart\App\Web\Layout\WebDialogPage;
use ModStart\App\Web\Layout\WebPage;
use ModStart\Core\Input\Request;
use ModStart\Field\AbstractField;
use ModStart\Field\AutoRenderedFieldValue;
use ModStart\Grid\Grid;
use ModStart\Repository\Filter\RepositoryFilter;
use Module\Member\Auth\MemberUser;
use Module\Member\Support\MemberLoginCheck;

class MemberMoneyController extends MemberFrameController implements MemberLoginCheck
{
    /** @var \Module\Member\Api\Controller\MemberMoneyController */
    private $api;

    public function __construct()
    {
        parent::__construct();
        $this->api = app(\Module\Member\Api\Controller\MemberMoneyController::class);
    }

    public function index(WebPage $page)
    {
        $grid = Grid::make('member_money_log');
        $grid->repositoryFilter(function (RepositoryFilter $filter) {
            $filter->where(['memberUserId' => MemberUser::id()]);
        });
        $grid->disableCUD()->disableItemOperate();
        $grid->useSimple(function (AbstractField $field, $item, $index) {
            return AutoRenderedFieldValue::makeView('module::Member.View.pc.memberMoney.item', [
                'item' => $item,
            ]);
        });
        if (Request::isPost()) {
            return $grid->request();
        }
        list($view, $_) = $this->viewPaths('memberMoney.index');
        return $page->pageTitle('钱包')->view($view)->body($grid);
    }


    public function chargeDesc(WebDialogPage $page)
    {
        $html = modstart_config('Member_MoneyChargeDesc');
        return $page->pageTitle('钱包充值说明')->body("<div class='ub-html'>$html</div>");
    }
}
