<?php


namespace App\Console\Commands;


use Illuminate\Console\Command;
use Illuminate\Support\Str;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Util\FileUtil;
use ModStart\Core\Util\HtmlUtil;
use ModStart\Data\DataManager;

class MigrateJob extends Command
{
    protected $signature = 'MigrateJob';

    public function handle()
    {
        print_r(\MCms::listContentByCatUrl('product'));
    }

    private function storageTest()
    {
        $storage = DataManager::storage();
        var_dump($storage->has('aaa.txt'));
        var_dump($storage->put('aaa.txt', 'bbb'));
        var_dump($storage->get('aaa.txt'));
        var_dump($storage->size('aaa.txt'));
        var_dump($storage->delete('aaa.txt'));
        var_dump($storage->put('bbb.txt', 'ccc'));
        var_dump($storage->softDelete('bbb.txt'));
    }
}
