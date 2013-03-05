var dict = {}
dict['a'] = ['0']
dict['b'] = ['1','2','3']
dict['c'] = ['1','2','3','4','5','6','7','8','9']


exports.choose = function(dict, key) {
  rand = Math.random()
  if (rand < 0.25) {
  	chance = 0.25/(dict[key].length)
  	incr_chance = chance
  	entry = 0
  	for (jump in dict[key]) {
  		if (rand < chance) {
  			return dict[key][entry]
  		}
  		entry ++
  		chance += incr_chance
  	}
  }
  return 'none'
}

var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0
var count6 = 0
var count7 = 0
var count8 = 0
var count9 = 0
var countnone=0

for (var i = 0; i<10000; i++){
  if (exports.choose(dict, 'c') == '1') {
  	count1 +=1
  }
  if (exports.choose(dict, 'c') == '2') {
  	count2 +=1
  }
  if (exports.choose(dict, 'c') == '3') {
  	count3 +=1
  }
  if (exports.choose(dict, 'c') == '4') {
  	count4 +=1
  }
  if (exports.choose(dict, 'c') == '5') {
  	count5 +=1
  }
  if (exports.choose(dict, 'c') == '6') {
  	count6 +=1
  }
  if (exports.choose(dict, 'c') == '7') {
  	count7 +=1
  }
  if (exports.choose(dict, 'c') == '8') {
  	count8 +=1
  }
  if (exports.choose(dict, 'c') == '9') {
  	count9 +=1
  }
  if (exports.choose(dict, 'c') == 'none') {
  	countnone +=1
  }
}
console.log(count1, count2, count3,count4, count5, count6, 
	count7, count8, count9,countnone)
