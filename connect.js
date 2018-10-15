(function() {
    var curPlayer = 'player1';

    $('.column').on('click', function(e) {
        var slotsInColumn = $(e.currentTarget).find('.slot');

        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass('player1')) {
                if (!slotsInColumn.eq(i).hasClass('player2')) {
                    break;
                }
            }
        }
        slotsInColumn.eq(i).addClass(curPlayer);
        if (checkForVictory(slotsInColumn)) {
            return showVictoryMessage();
        } else {
            var slotsInRow = $('.row' + i);
            if (checkForVictory(slotsInRow)) {
                return showVictoryMessage();
            } else {
            }
        }
        switchPlayers();
    });

    function switchPlayers() {
        if (curPlayer == 'player1') {
            curPlayer = 'player2';
        } else {
            curPlayer = 'player1';
        }
    }
})();

switchPlayers();


function getOneDiagInX(col,row) {

    col -= 3;
    row -=3;
    var elm = $(
        '.column:nth-child'('+(col+1) +').slot:nth-child('+')
    )

}



+7



var victories = [
    [0,7,14,21]
    
]
