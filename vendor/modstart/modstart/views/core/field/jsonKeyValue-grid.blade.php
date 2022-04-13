@if(is_array($value))
    <div class="tw-bg-gray-100 tw-p-1 tw-rounded">
        <table class="ub-table mini" style="width:{{$width-40}}px;white-space:normal;word-break:break-all;">
            @foreach($value as $k=>$v)
                <tr>
                    <td width="50">{{$k}}</td>
                    <td>{{$v}}</td>
                </tr>
            @endforeach
        </table>
    </div>
@else
    <pre style="margin:0;overflow:auto;width:{{$width}};max-height:{{$maxHeight}}">{{json_encode($value,JSON_PRETTY_PRINT)}}</pre>
@endif