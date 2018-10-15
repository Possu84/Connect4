(function() {
    var curPlayer = 'player1';
    var slots = $('.slot');
    var showVictoryMessage = function() {
        console.log('Victory');
        $('#text, #curtain').toggleClass('show');
    };
    $('#reset').click(function() {
        console.log('click');
        location.reload();
    });

    $('.column').on('click', function(e) {
        var slotsInColumn = $(e.currentTarget).find('.slot');

        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass('player1')) {
                if (!slotsInColumn.eq(i).hasClass('player2')) {
                    slotsInColumn.eq(i).addClass(curPlayer);
                    break;
                }
            }
        }

        function checkForVictory(slots) {
            var str = '';
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(curPlayer)) {
                    str += 'y';
                } else {
                    str += 'n';
                }
            }

            if (str.indexOf('yyyy') > -1) {
                showVictoryMessage();
            }
        }

        function checkForDiagonalWin() {
            var diagonalWin = [
                [0, 7, 14, 21],
                [1, 8, 15, 22],
                [2, 9, 16, 23],
                [3, 8, 13, 18],
                [4, 9, 14, 19],
                [5, 10, 15, 20],
                [6, 13, 20, 27],
                [7, 14, 21, 28],
                [8, 15, 22, 29],
                [9, 14, 19, 24],
                [10, 15, 20, 25],
                [11, 16, 21, 26],
                [12, 19, 26, 33],
                [13, 20, 27, 34],
                [14, 21, 28, 35],
                [15, 20, 25, 30],
                [16, 21, 26, 31],
                [17, 22, 27, 32],
                [18, 25, 32, 39],
                [19, 26, 33, 40],
                [20, 27, 34, 41],
                [21, 26, 31, 36],
                [22, 27, 32, 37],
                [23, 28, 33, 38]
            ]; // array of posibilites

            for (var i = 0; i < diagonalWin.length; i++) {
                var playCounter = 0;
                for (var j = 0; j < 4; j++) {
                    if (slots.eq(diagonalWin[i][j]).hasClass(curPlayer)) {
                        playCounter++;
                    }
                }
                if (playCounter == 4) {
                    return true;
                }
            }
        }

        if (checkForVictory(slotsInColumn)) {
            return showVictoryMessage();
        } else {
            var slotsInRow = $('.row' + i);
            if (checkForVictory(slotsInRow)) {
                return showVictoryMessage();
            } else {
                if (checkForDiagonalWin()) {
                    return showVictoryMessage();
                }
            }
            switchPlayers();
        }
    });

    function switchPlayers() {
        $('#currentplayer')
            .toggleClass('show2')
            .toggleClass('anim')
            .toggleClass('anim2');

        if (curPlayer == 'player1') {
            curPlayer = 'player2';
        } else {
            curPlayer = 'player1';
        }
    }
})();
