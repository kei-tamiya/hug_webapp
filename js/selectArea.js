
colors = [];

// test des rollover-effekts

Normal1 = new Image();
Normal1.src = "button-speichern-s.png";     /* erste Standard-Grafik */
Highlight1 = new Image();
Highlight1.src = "button-speichern-w.png"; /* erste Highlight-Grafik */

function Bildwechsel (BildId, Bildobjekt) {
  window.document.getElementById(BildId).src = Bildobjekt.src;
}
// Test Ende

button = false;
color = 15;			// aktuell ausgesuchte farbe


bitmap = new Array(0,0,0,0,7,8,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);



// for(counter=0; counter<bitmap.length; counter++) { bitmap['counter']=0 }


function down() {button = true; return false;}
function up() {button = false;}


function paint(n) {
	if(button) {
		document.getElementById("p"+n).src = "pixel/" + color + ".gif";
		// document.getElementById("mp"+n).src = "minipixel/" + color + ".gif";
		bitmap[n] = color;
	}
}


function selectColor(newColor) {
	document.getElementById('palette'+color).src = "pixel/nixdrin.gif"
	document.getElementById('palette'+newColor).src = "pixel/pfeil.gif"
	color = newColor;

}

function convert() {
	document.forms[0].bitmap.value = bitmap.join(" ");

}

// 初期化、セルの生成
$(function() {
  var turnNum = 80;
  var cellHtml = '<tr>';
  for (var i=1; i <= 6400; i++) {
    cellHtml += "<td class='cellTd'><img src='pixel/0.gif' width='15' height='15' id='cell" + i + "' class='cell'></td>"
    if (i % turnNum == 0) {
      cellHtml += "</tr>"
      if (i != 6400) {
        cellHtml += "<tr>"
      }
    }
  }
  $('#livingSpaceTable').append(cellHtml);
});

$(function() {
  var ns = {};
  var turnNum = 80;
  var livingSpaceAgentNumArr = [];

  // 縦横の長さを反転させる
  $('#directionExchangeBtn').on('click', function() {
    var $living_space_yoko_length = $('#living_space_yoko_length');
    var $living_space_tate_length = $('#living_space_tate_length');
    var yoko = $living_space_yoko_length.val();
    $living_space_yoko_length.val($living_space_tate_length.val());
    $living_space_tate_length.val(yoko);
  });


  $('.cell').on('click', function() {
    var $living_space_yoko_length = $('#living_space_yoko_length');
    var $living_space_tate_length = $('#living_space_tate_length');
    // var $next_toilet_spot = $('#next_toilet_spot');
    var yoko = parseInt($living_space_yoko_length.val());
    var tate = parseInt($living_space_tate_length.val());
    if (!yoko) {
      window.alert('横方向の長さの値が正しく設定されていません。');
      return false;
    }
    if (!tate) {
      window.alert('縦方向の長さの値が正しく設定されていません。');
      return false;
    }

    var id = $(this).attr('id');
    var idNum = parseInt(id.replace('cell', ''));
    var colNum = idNum % turnNum;
    var rowNum = parseInt(idNum / turnNum);

    // 右端の方で横方向の長さ分だけ占有できない場合、または、下の方で縦方向に占有できない場合ははじく
    if (turnNum - colNum < yoko || turnNum - rowNum < tate) {
      return false;
    }

    var livingSpaceAgentNum = parseInt(window.prompt('避難者番号を入力してください。（半角数字）', ''));
    if (!livingSpaceAgentNum) {
      window.alert('半角数字を入力してください。');
      return false;
    }
    if ($.inArray(livingSpaceAgentNum, livingSpaceAgentNumArr) !== -1) {
      window.alert(livingSpaceAgentNum + ' はすでに使われている番号です。');
      return false;
    }

    if (!canOccupy(idNum, livingSpaceAgentNum)) {
      return;
    };

    var html = '<div id="livingSpace' + livingSpaceAgentNum + '" class="livingSpace">' + livingSpaceAgentNum + '</div>';
    $('#livingSpaces').append(html);
    $('#livingSpace' + livingSpaceAgentNum).offset({ top: $(this).offset().top, left: $(this).offset().left });
    var startX = 0;
    var startY = 0;
    $('.livingSpace').draggable({
      start: function (event, ui) {
        startX = ui.offset.left;
        startY = ui.offset.top;
      },
      stop : function (event , ui){
        var x = ui.offset.left;
        var y = ui.offset.top;
        // document.elementFromPointがz-indexで一番上の要素を取得するので一旦cellを一番上に
        $('.cellTd').css("zIndex", 900);
        var leftTopCellOnStop = document.elementFromPoint(x, y - document.body.scrollTop);
        $('.cellTd').css("zIndex", 0);
        var leftTopCellId = parseInt($(leftTopCellOnStop).attr('id').replace('cell', ''));
        if (!canOccupy(leftTopCellId, livingSpaceAgentNum)) {
          $(this).offset({ top: startY, left: startX });
        };
      },
      containment: "#livingSpaceTable",
      snap: ".cell"
    });
    $('#livingSpace' + livingSpaceAgentNum).on('contextmenu', function () {
      if (window.confirm(livingSpaceAgentNum + '番を消去しますか？')) {
        $(this).remove();
        var idx = $.inArray(parseInt(livingSpaceAgentNum, 10), livingSpaceAgentNumArr);
        if(idx >= 0){
          livingSpaceAgentNumArr.splice(idx, 1);
        }
        $('.agent' + livingSpaceAgentNum).removeClass('occupied').removeClass('agent' + livingSpaceAgentNum);
      }
      return false;
    });
    // 同じ番号の占有空間を作らせないために一度生成した占有空間番号を配列に格納
    livingSpaceAgentNumArr.push(livingSpaceAgentNum);

    function canOccupy(idNum, livingSpaceAgentNum) {
      for (var i=idNum; i < idNum+yoko; i++) {
        for (var j=0; j < tate; j++) {
          var checkIdNum = i + j*turnNum;
          var checkId = '#cell' + checkIdNum;
          if ($(checkId).hasClass('occupied')) {
            // TODO あとで番号を表示するように変更
            window.alert('他の占有エリアと重なっているため占有できません。先に他の占有空間を移動させてください。');
            $('.preOccupied').removeClass('preOccupied');
            return false;
          }
          $(checkId).addClass('preOccupied');
        }
      }
      $('.preOccupied').removeClass('preOccupied').addClass('agent' + livingSpaceAgentNum).addClass('occupied');
      return true;
    }
  });

  function isParseInt(str) {
    var num = parseInt(str);
    if (!isNaN(num) && typeof(num) === 'number') {
      return true;
    }
    return false;
  }

  $('#consoleOutput').on('click', function() {
    var outputObj = {};
    outputObj.agentNumArr = livingSpaceAgentNumArr;
    outputObj.livingSpaces = {};
    for (var i=0; i < livingSpaceAgentNumArr.length; i++) {
      var agentNum = livingSpaceAgentNumArr[i];
      var agent = 'agent' + agentNum;
      var livingSpaceArr = [];
      var cells = $('.' + agent);
      $.each(cells, function() {
        livingSpaceArr.push($(this).attr('id'));
      });
      outputObj.livingSpaces['agent' + agentNum] = livingSpaceArr;
      // var cell = $('.' + agentNum).;
      // console.log(cell);
    }
    console.log(JSON.stringify(outputObj));
  });

  $('#consoleInput').on('click', function() {
    $.getJSON('js/living_spaces.json', function(data) {
      console.log(data.agentNumArr);
      livingSpaceAgentNumArr = data.agentNumArr.slice();
      ns = Object.assign({}, data);
      $.map(data.livingSpaces, function(value, key) {
        // key = agent1 とか agent2　とか, value = [] 占有空間の配列

        // それぞれのcellにアクセス
        paintLivingSpaces(value, key);
      });
      console.log(ns);
      console.log(livingSpaceAgentNumArr);
    });
    // paintLivingSpace
  });

  function paintLivingSpaces(cells, agent) {
    for (var i=0; i < cells.length; i++) {
      var cell = cells[i];
      console.log(cell);
      paintLivingSpace(cell, agent);
      // TODO ここは改良した方がいい　ずれると思う
      if (i == 7) {
        $('#' + cell).after("<p class='livingSpaceAgentNum'>" + agent.replace('agent', '') + "</p>");
      }
    }
  }

  function paintLivingSpace(cell, agent) {
    $('#' + cell).attr('src', "pixel/3.gif").addClass('occupied').addClass(agent);
  }
});
