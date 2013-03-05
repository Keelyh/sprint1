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

