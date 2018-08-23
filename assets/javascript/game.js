let total = 0
let wins = 0
let losses = 0


//show random value for goal and add to page
let goal = Math.floor(Math.random() * 100) + 20
$('.total').text(total)
$('.randomNum').text(goal)

//random value to crystals
for (let i = 1; i < 5; i++) {
  $('#redGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  $('#blueGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  $('#greenGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  $('#purpleGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  
}

//click on the crystal to get the data value
$('.gem').on('click', function() {
  let crystalValue = $(this).attr('gem')
  total += parseInt(crystalValue)  
  $('.total').text(total)
  gameStatus()
})

//function to give you status of the game and resets random number, total score and gem values
function gameStatus () {
  if (goal === total) {
    wins++
    $('.wins').html(wins)
    $('.message').html("You Win!")
    setTimeout(reset, 2000);
  } else if (total > goal) {
    losses++
    $(".losses").html(losses)
    $('.message').html("You lose, try again!")
     setTimeout(reset, 2000);
  }
}


//function to reset the game
function reset() {
  $('#redGem').attr('gem', Math.floor(Math.random() * 20) +1)
  $('#blueGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  $('#greenGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  $('#purpleGem').attr('gem', Math.floor(Math.random() * 20) + 1)
  total = 0
  $(".total").text(total)
  goal = Math.floor(Math.random() * 100) + 20
  $('.randomNum').text(goal)
  $('.message').html(" ")
}
