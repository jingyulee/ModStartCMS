<div class="line">
    <div class="label">
        @if($tip)
            <a class="ub-text-muted" href="javascript:;" data-tip-popover="{{$tip}}"><i class="iconfont icon-warning"></i></a>
        @endif
        {{$label}}:
    </div>
    <div class="field">
        <div class="value">{{$value}}</div>
        <input type="hidden" name="{{$name}}" value="{{$value}}"/>
    </div>
</div>
