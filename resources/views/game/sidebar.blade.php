<aside class="sidebar-game">
    <ul class="sidebar-game__container">
        <li>
            <a href="{{ route('game.rules') }}" class="sidebar-game__link">rules</a>
        </li>
        <li>
            <a class="sidebar-game__link justify-between sidebar-game__link--dropdown">
                <span>next 3 game schedule</span>
                <box-icon name='chevron-right' type='solid' ></box-icon>
            </a>
            <ul class="sidebar-game__dropdown-box">
                @foreach ($nextGame as $game)
                <li class="sidebar-game__dropdown-item">
                    <a href="javascript:void(0);" class="sidebar-game__link">
                        <span class="mr-2">Jam:</span>
                        <time datetime="{{ now() }}">{{ $game->started_at }}</time>
                    </a>
                </li>
                @endforeach
            </ul>
        </li>
        <li>
            <a href="" class="sidebar-game__link">game history</a>
        </li>
    </ul>
</aside>