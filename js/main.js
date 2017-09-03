// var d3 = require("d3");
$(function(){
  //ランダムイベントの削除
  // var tmpMessages = [
  //   'が体調不良を訴えています。',
  //   '体調不良者が増加傾向です。',
  //   '水を追加で欲しがっている人が20人います。',
  //   '水担当の運営「このペースで水を使うとトイレを流すための水がなくなりそうです！」。',
  //   '赤ちゃんの泣き声がうるさいと苦情を言っている人がいます。',
  //   '占有空間の面積が狭くてつらいと苦情が出ています。',
  //   'ペットが迷惑だと苦情が出ています。',
  //   '隣の人が普通より多い量のご飯をもってるんだけどどういうこと！？！？',
  //   '新たに30人きました。どうしますか。'
  // ];
  var messages = [];
  var NAMESPACE = {};
  NAMESPACE.lastDrinkWaterDistributionAmount = 0;
  NAMESPACE.excretaDistributionAmount = 0;
  NAMESPACE.nextTurnMessages = [];
  NAMESPACE.totalDrinkWaterAmountList = [];
  NAMESPACE.dissatisfactionAverage = [0];

  $('#submitBtn').on('click', function(e) {
    e.preventDefault();

    var $women_agent_num = $('#women_agent_num');
    var $men_agent_num = $('#men_agent_num');
    var $women_toilet_num = $('#women_toilet_num');
    var $men_toilet_num = $('#men_toilet_num');
    var $temporary_toilet_num = $('#temporary_toilet_num');
    var $excreta_amount = $('#excreta_amount');
    var $toilet_goods_num = $('#toilet_goods_num');
    var $toilet_water_amount = $('#toilet_water_amount');
    var $drink_water_amount = $('#drink_water_amount');
    var $total_drink_water_amount = $('#total_drink_water_amount');
    // var $next_toilet_spot = $('#next_toilet_spot');

    // persInt 数値化
    var women_agent_num = parseInt($women_agent_num.val());
    var men_agent_num = parseInt($men_agent_num.val());
    var women_toilet_num = parseInt($women_toilet_num.val());
    var men_toilet_num = parseInt($men_toilet_num.val());
    var temporary_toilet_num = parseInt($temporary_toilet_num.val());
    var excreta_amount = parseInt($excreta_amount.val());
    var toilet_goods_num = parseInt($toilet_goods_num.val());
    var toilet_water_amount = parseInt($toilet_water_amount.val());
    var drink_water_amount = parseInt($drink_water_amount.val());
    var total_drink_water_amount = parseInt($total_drink_water_amount.val());
    // var next_toilet_spot = $next_toilet_spot.val();

    var currentTurn = parseInt($('#currentTurn').text());

    var total_women_agent_num = [6,23,37,56,74,88,106];
      // var turn0_women_agent_num = total_women_agent_num[0];
      // var turn1_women_agent_num = total_women_agent_num[1];
      // var turn2_women_agent_num = total_women_agent_num[2];
      // var turn3_women_agent_num = total_women_agent_num[3];
      // var turn4_women_agent_num = total_women_agent_num[4];
      // var turn5_women_agent_num = total_women_agent_num[5];
      // var turn6_women_agent_num = total_women_agent_num[6];
    var total_men_agent_num = [8,20,36,55,70,86,98];
      // var turn0_men_agent_num = total_men_agent_num[0];
      // var turn1_men_agent_num = total_men_agent_num[1];
      // var turn2_men_agent_num = total_men_agent_num[2];
      // var turn3_men_agent_num = total_men_agent_num[3];
      // var turn4_men_agent_num = total_men_agent_num[4];
      // var turn5_men_agent_num = total_men_agent_num[5];
      // var turn6_men_agent_num = total_men_agent_num[6];

    // if (typeof women_agent_num !== 'number') {
    //   return alert('女性避難者数は数字を入れてください');
    // }
    // if (currentTurn === 0) {
    //   if (!women_agent_num || !men_agent_num || !women_toilet_num || !men_toilet_num || !temporary_toilet_num || !excreta_amount || !toilet_goods_num || !toilet_water_amount || !drink_water_amount || !total_drink_water_amount) {
    //     return alert('必要な項目に適切な型で値を入力してください');
    //   }
    //   NAMESPACE.totalDrinkWaterAmountList.push(parseInt($('#total_drink_water_amount').val()));
    // }

    if (currentTurn === 7) {
      $('#turnText').text('ゲーム終了');
      $('#submitBtn').prop('disabled', 'true');
    } else if (currentTurn < 7) {
      messages = NAMESPACE.nextTurnMessages.slice();
      NAMESPACE.nextTurnMessages = [];
      // var agentNum = women_agent_num + men_agent_num;
      // if (Math.random() < 0.4) {
      //   var idx = Math.floor(Math.random() * tmpMessages.length);
      //   if (idx === 0){
      //     var names = '';
      //     for (var i=0; i < 3; i++) {
      //       names += (Math.floor(Math.random() * (10))+1).toString() + '番さん、';
      //     }
      //     names += tmpMessages[0]
      //     messages.push(names);
      //   } else {
      //     messages.push(tmpMessages[idx]);
      //   }
      // }

//ランダムイベントの消去
      // if (women_toilet_num > 0 && Math.random() < 0.4) {
      //   $('#women_toilet_num').val(women_toilet_num-1);
      //   if (women_toilet_num-1 === 0) {
      //     messages.push('使用可能な女子トイレがなくなりました。');
      //   } else {
      //     messages.push('女子トイレが1つ使用できなくなりました。');
      //   }
      // }

      // if (men_toilet_num > 0 && Math.random() < 0.4) {
      //   $('#men_toilet_num').val(men_toilet_num-1);
      //   if (men_toilet_num-1 === 0) {
      //     messages.push('使用可能な男子トイレがなくなりました。');
      //   } else {
      //     messages.push('男子トイレが1つ使用できなくなりました。');
      //   }
      // }

      // if (toilet_goods_num > 0) {
      //   var goods_num = Math.floor(toilet_goods_num - (women_agent_num+men_agent_num)/8);
      //   if (goods_num <= 0) {
      //     goods_num = 0;
      //     messages.push('残りのトイレットペーパー数が0になりました。');
      //   }
      //   $('#toilet_goods_num').val(goods_num);
      // }

      // if (toilet_water_amount > 0) {
      //   var water_amount = Math.floor(toilet_water_amount - agentNum/20);
      //   if (water_amount <= 0) {
      //     water_amount = 0;
      //     messages.push('残りのトイレを流す水の量が0になりました。');
      //   }
      //   $('#toilet_water_amount').val(water_amount);
      // }

      //ターン毎の固定コメント
      if (currentTurn === 0) {
        messages.push('１日目前半<br>「もうダメです。トイレを使わせてください。お願いします！」と避難者が押し寄せて来ました。');
        _calcDrinkWater();
        var turn0_drink_water = total_drink_water_amount;
        console.log(turn0_drink_water);
      }
      //ターン毎の固定コメント
      if (currentTurn === 1) {
        $temporary_toilet_num = $('#temporary_toilet_num').val('5');
        messages.push('１日目後半<br>仮設トイレ５基が到着しました。どこに設置しますか？');
        _calcDrinkWater();
        var turn1_drink_water = total_drink_water_amount;
        console.log(turn1_drink_water);
      }
      //ターン毎の固定コメント
      if (currentTurn === 2) {
        messages.push('２日目前半<br>ニーズ調査にきました。現状の避難所のニーズについて教えてください。<br>仮設シャワー１基が到着しました。<br>ポータブルトイレ２０個が到着しました。');
        _calcDrinkWater();
        _calcToilet();
        var turn2_drink_water = total_drink_water_amount;
        console.log(turn2_drink_water);
      }
      //ターン毎の固定コメント
      if (currentTurn === 3) {
        messages.push('２日目後半<br>炊き出し用の食器が到着しました。');
        _calcDrinkWater();
        _calcToilet();
        var turn3_drink_water = total_drink_water_amount;
        console.log(turn3_drink_water);
      }
      //ターン毎の固定コメント
      if (currentTurn === 4) {
        messages.push('３日目前半<br>給水タンク車２台が到着しました。備蓄生活用水が増加しました。<br>総理大臣のお見舞いが到着しました。');
        //給水タンク容量１車２０００L　何リットルか追加する
        //200人*3L*3日 = 1800Lが目安か
        _calcDrinkWater();
        _calcToilet();
        var supplyWaterAmount = 1500;
        var remainingDrinkWaterAmount = Math.floor(total_drink_water_amount + supplyWaterAmount);
        $('#total_drink_water_amount').val(remainingDrinkWaterAmount);
        var turn4_drink_water = total_drink_water_amount;
        console.log(turn4_drink_water);
      }
      //ターン毎の固定コメント
      if (currentTurn === 5) {
        messages.push('３日目後半<br>トイレットペーパー５０個が到着しました。');
        _calcDrinkWater();
        _calcToilet();
        var turn5_drink_water = total_drink_water_amount;
        console.log(turn5_drink_water);
      }
      if (currentTurn === 6) {
        messages.push('ゲームが終了しました。');
        _calcDrinkWater();
        _calcToilet();
        var turn6_drink_water = total_drink_water_amount;
        console.log(turn6_drink_water);
      }
      // // 全ターン計算実施
      // if (currentTurn === 1 || currentTurn === 2 || currentTurn === 3 || currentTurn === 4 || currentTurn === 5|| currentTurn === 6 ) {
      //   _calcDrinkWater();
      // }

      //ターン毎処理へ移動
      // if (currentTurn === 2 || currentTurn === 5) {
      //   if (NAMESPACE.lastDrinkWaterDistributionAmount < 3) {
      //     messages.push('生活用水の量が少ないと苦情が来ています。');
      //   }
      // }

      //重複プログラムの削除
      // if (currentTurn === 2 || currentTurn === 5) {
      //   if (NAMESPACE.lastDrinkWaterDistributionAmount < 3) {
      //     messages.push('生活用水の量が少ないと苦情が来ています。');
      //   }
      // }

      $('#currentTurn').text((currentTurn+1).toString());
      if (messages.length >= 1) {
        //枠題テキスト修正
        var html = '<div class="panel-heading">お知らせ</div>';
        for (var i=0; i < messages.length; i++) {
          html += '<div class="panel-body">' + messages[i] + '</div>';
        }
        $('#messages').html(html);
      }

      function _calcDrinkWater() {
        messages.push('生活用水の配給を行いました。');
        NAMESPACE.lastDrinkWaterDistributionAmount = drink_water_amount;
        if (drink_water_amount > 0) {
          //応急給水量を半日換算量に ~~/2
          var lostWaterAmount = (women_agent_num + men_agent_num)*drink_water_amount/2;
          var remainingDrinkWaterAmount = Math.floor(total_drink_water_amount - lostWaterAmount);
          if (currentTurn === 1 ) {
            if ((lostWaterAmount*2 - total_drink_water_amount) > 0) {
              NAMESPACE.nextTurnMessages.push("配給担当から次の生活用水の配給が足りないかも知れないとの報告がありました。");
            }
          }
          if (remainingDrinkWaterAmount <= 0) {
            remainingDrinkWaterAmount = 0;
            messages.push('生活用水の備蓄量が0になりました。');
          }
          $('#total_drink_water_amount').val(remainingDrinkWaterAmount);
        }
      }

      function _calcToilet() {
        messages.push('仮設トイレの計算を行いました。');
        // NAMESPACE.excretaDistributionAmount = drink_water_amount;
        // if (drink_water_amount > 0) {
        var excretionAmount = 2.15;
        var addexcretaAmount = (women_agent_num + men_agent_num) * excretionAmount/2;
        var totalexcretaAmount = Math.floor(excreta_amount + addexcretaAmount);
        // if (currentTurn === 1 ) {
        //   if ((lostWaterAmount*2 - total_drink_water_amount) > 0) {
        //     NAMESPACE.nextTurnMessages.push("配給担当から次の生活用水の配給が足りないかも知れないとの報告がありました。");
        //   }
        // }
        if (totalexcretaAmount < 360) {
          var remainingTemporaryToiletNum = 5;
        }
        if (360 <= totalexcretaAmount && totalexcretaAmount < 720) {
          var remainingTemporaryToiletNum = 4;
          messages.push('仮設トイレが1つ使用不可能になりました。');
        }
        if (720 <= totalexcretaAmount && totalexcretaAmount < 1080) {
          var remainingTemporaryToiletNum = 3;
          messages.push('仮設トイレが2つ使用不可能になりました。');
        }
        if (1080 <= totalexcretaAmount && totalexcretaAmount < 1440) {
          var remainingTemporaryToiletNum = 2;
          messages.push('仮設トイレが3つ使用不可能になりました。');
        }
        if (1440 <= totalexcretaAmount && totalexcretaAmount < 1800) {
          var remainingTemporaryToiletNum = 1;
          messages.push('仮設トイレが4つ使用不可能になりました。');
        }
        if (1800 <= totalexcretaAmount) {
          var remainingTemporaryToiletNum = 0;
          messages.push('仮設トイレが全て使用不可能になりました。');
        }
        $('#temporary_toilet_num').val(remainingTemporaryToiletNum);
        $('#excreta_amount').val(totalexcretaAmount);
      }

      NAMESPACE.totalDrinkWaterAmountList.push(parseInt($('#total_drink_water_amount').val()));
      NAMESPACE.dissatisfactionAverage.push(3);
      var ctx = document.getElementById('chart_total_drink_water_amount').getContext('2d');
      var chart_total_drink_water_amount = new Chart(ctx, {
      type: 'line',
      data: {
      labels: ['ターン0','ターン1', 'ターン2', 'ターン3', 'ターン4', 'ターン5', 'ターン6'],
      datasets: [{
        label: '水量',
        data: [turn0_drink_water, turn1_drink_water, turn2_drink_water, turn3_drink_water, turn4_drink_water, turn5_drink_water, turn6_drink_water],
        backgroundColor: "rgba(153,255,51,0.2)"
      }]
      },
      options: {
              scale: {
                  ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100,
                  }
              }
          }
      });
    }
  });

$('#inputNumBtn').on('click', function(e) {
  e.preventDefault();

  var $women_agent_num = $('#women_agent_num');
  var $men_agent_num = $('#men_agent_num');
  var $women_toilet_num = $('#women_toilet_num');
  var $men_toilet_num = $('#men_toilet_num');
  var $temporary_toilet_num = $('#temporary_toilet_num');
  var $excreta_amount = $('#excreta_amount');
  var $toilet_goods_num = $('#toilet_goods_num');
  var $toilet_water_amount = $('#toilet_water_amount');
  var $drink_water_amount = $('#drink_water_amount');
  var $total_drink_water_amount = $('#total_drink_water_amount');
  // var $next_toilet_spot = $('#next_toilet_spot');

  // persInt 数値化
  var women_agent_num = parseInt($women_agent_num.val());
  var men_agent_num = parseInt($men_agent_num.val());
  var women_toilet_num = parseInt($women_toilet_num.val());
  var men_toilet_num = parseInt($men_toilet_num.val());
  var temporary_toilet_num = parseInt($temporary_toilet_num.val());
  var excreta_amount = parseInt($excreta_amount.val());
  var toilet_goods_num = parseInt($toilet_goods_num.val());
  var toilet_water_amount = parseInt($toilet_water_amount.val());
  var drink_water_amount = parseInt($drink_water_amount.val());
  var total_drink_water_amount = parseInt($total_drink_water_amount.val());
  // var next_toilet_spot = $next_toilet_spot.val();

  var currentTurn = parseInt($('#currentTurn').text());

  var total_women_agent_num = [6,23,37,56,74,88,106];
    // var turn0_women_agent_num = total_women_agent_num[0];
    // var turn1_women_agent_num = total_women_agent_num[1];
    // var turn2_women_agent_num = total_women_agent_num[2];
    // var turn3_women_agent_num = total_women_agent_num[3];
    // var turn4_women_agent_num = total_women_agent_num[4];
    // var turn5_women_agent_num = total_women_agent_num[5];
    // var turn6_women_agent_num = total_women_agent_num[6];
  var total_men_agent_num = [8,20,36,55,70,86,98];
    // var turn0_men_agent_num = total_men_agent_num[0];
    // var turn1_men_agent_num = total_men_agent_num[1];
    // var turn2_men_agent_num = total_men_agent_num[2];
    // var turn3_men_agent_num = total_men_agent_num[3];
    // var turn4_men_agent_num = total_men_agent_num[4];
    // var turn5_men_agent_num = total_men_agent_num[5];
    // var turn6_men_agent_num = total_men_agent_num[6];
  if (currentTurn === 0) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[0]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[0]);
    $women_toilet_num = $('#women_toilet_num').val('0');
    $men_toilet_num = $('#men_toilet_num').val('0');
    $temporary_toilet_num = $('#temporary_toilet_num').val('0');
    $excreta_amount = $('#excreta_amount').val('0');
    $toilet_goods_num = $('#toilet_goods_num').val('30');
    $toilet_water_amount = $('#toilet_water_amount').val('30');
    $drink_water_amount = $('#drink_water_amount').val('3');
    $total_drink_water_amount = $('#total_drink_water_amount').val('600');
    var turn0_drink_water = 0;
    var turn1_drink_water = 0;
    var turn2_drink_water = 0;
    var turn3_drink_water = 0;
    var turn4_drink_water = 0;
    var turn5_drink_water = 0;
    var turn6_drink_water = 0;
  }
  if (currentTurn === 1) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[1]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[1]);
  }
  if (currentTurn === 2) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[2]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[2]);
  }
  if (currentTurn === 3) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[3]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[3]);
  }
  if (currentTurn === 4) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[4]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[4]);
  }
  if (currentTurn === 5) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[5]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[5]);
  }
  if (currentTurn === 6) {
    $women_agent_num = $('#women_agent_num').val(total_women_agent_num[6]);
    $men_agent_num = $('#men_agent_num').val(total_men_agent_num[6]);
  }
});



var ctx = document.getElementById('chart_total_people_amount').getContext('2d');
var chart_total_people_amount = new Chart(ctx, {
type: 'line',
data: {
labels: ['ターン0','ターン1', 'ターン2', 'ターン3', 'ターン4', 'ターン5', 'ターン6'],
datasets: [{
  label: '人数',
  data: [14, 43, 73, 111, 144, 174, 204],
  backgroundColor: "rgba(255,153,0,0.2)"
}]
}
});

  // 開発用
  $('#inputDevNumBtn').on('click', function () {
    $women_agent_num = $('#women_agent_num').val('50');
    $men_agent_num = $('#men_agent_num').val('50');
    $women_toilet_num = $('#women_toilet_num').val('0');
    $men_toilet_num = $('#men_toilet_num').val('0');
    $temporary_toilet_num = $('#temporary_toilet_num').val('0');
    $excreta_amount = $('#excreta_amount').val('0');
    $toilet_goods_num = $('#toilet_goods_num').val('30');
    $toilet_water_amount = $('#toilet_water_amount').val('30');
    $drink_water_amount = $('#drink_water_amount').val('3');
    $total_drink_water_amount = $('#total_drink_water_amount').val('600');
  });
});
