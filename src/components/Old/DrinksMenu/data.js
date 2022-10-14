// import API module for NEOCAST querying and query validation
import API from 'api'


export default [
/**********************************************************************************************************************
PACKAGED DRINKS
**********************************************************************************************************************/
	{
		id     : 'milk',
		apiMap : 'drinks_milk',
		label  : 'Milk',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 4,
		sizes  : [
			{
				id       : 'drinks_milk',
				label    : 'Milk',
				calories : '100/200',
				price    : API.loc('drinks_milk_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'drinks_bottle',
		apiMap : 'drinks_bottle',
		label  : 'Bottled',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 5,
		sizes  : [
			{
				id       : 'drinks_bottle',
				label    : 'Bottled',
				calories : '0-300',
				price    : API.loc('drinks_bottle_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'coffee_12oz',
		apiMap : 'drinks_coffee',
		label  : 'Coffee 12 oz.',
		menu   : 'drinks',
		type   : 'hot',
		order  : 10,
		sizes  : [
			{
				id       : '12oz',
				label    : '12oz',
				calories : '0',//API.net('drinks_coffee_cal'),
				price    : API.loc('drinks_coffee_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'coffee_16oz',
		apiMap : 'sides_coffee_16oz',
		label  : 'Coffee 16 oz.',
		menu   : 'drinks',
		type   : 'hot',
		order  : 11,
		sizes  : [
			{
				id       : '16oz',
				label    : '16oz',
				calories : '0',//API.net('sides_coffee_cal_16oz'),
				price    : API.loc('sides_coffee_16oz_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'juice_box',
		apiMap : 'sides_juice_box',
		label  : 'Juice Box',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 12,
		sizes  : [
			{
				id       : 'sides_juice_box',
				label    : 'Juice Box',
				calories : API.net('sides_juice_box_cal'),
				price    : API.loc('sides_juice_box_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'sides_hot_chocolate',
		apiMap : 'sides_hot_chocolate',
		label  : 'Hot Chocolate',
		menu   : 'drinks',
		type   : 'hot',
		order  : 13,
		sizes  : [
			{
				id       : 'sides_hot_chocolate',
				label    : 'Hot Chocolate',
				calories : API.net('sides_hot_chocolate_cal'),
				price    : API.loc('sides_hot_chocolate_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'tea',
		apiMap : 'sides_tea',
		label  : 'Tea',
		menu   : 'drinks',
		type   : 'hot',
		order  : 14,
		sizes  : [
			{
				id       : 'sides_tea',
				label    : 'Tea',
				calories : API.net('sides_tea_cal'),
				price    : API.loc('sides_tea_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'sides_bottled_water',
		apiMap : 'sides_bottled_water',
		label  : 'Bottled Water',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 15,
		sizes  : [
			{
				id       : 'sides_bottled_water',
				label    : 'Bottled Water',
				calories : API.net('sides_bottled_water_cal'),
				price    : API.loc('sides_bottled_water_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'x2',
		apiMap : 'drinks_x2',
		label  : 'X2 Energy Tea',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 16,
		sizes  : [
			{
				id       : 'drinks_x2',
				label    : 'X2 Energy Tea',
				calories : API.net('drinks_x2_cal'),
				price    : API.loc('drinks_x2_price')
			}
		],
		restaurantOfTheFuture : false
	},
	{
		id     : 'honestkids',
		apiMap : 'drinks_honestkids',
		label  : 'Honest Kids&#174;',
		menu   : 'drinks',
		type   : 'packaged',
		order  : 17,
		sizes  : [
			{
				id       : 'drinks_honestkids',
				label    : 'Honest Kids&#174;',
				calories : API.net('drinks_honestkids_cal'),
				price    : API.loc('drinks_honestkids_price')
			}
		],
		restaurantOfTheFuture : false
	},




/**********************************************************************************************************************
HOT DRINKS
**********************************************************************************************************************/
	{
		id      : 'coffee',
		label   : 'Coffee',
		menu    : 'hot_drinks',
		type    : 'hot',
		order   : 1,
		sizes   : [
			{
				id       : '12oz',
				label    : '12oz',
				calories : '',
				price    : API.loc('drinks_coffee_price')
			},
			{
				id       : '16oz',
				label    : '16oz',
				calories : '',//API.net('sides_coffee_cal_16oz'),
				price    : API.loc('sides_coffee_16oz_price')
			}
		],
		options : [
			{
				label    : 'Regular',
				calories : '0'
			},
			{
				label    : 'Decaf',
				calories : '0'
			},
			{
				label    : 'French Vanilla',
				calories : '90-120'
			}
		],
		restaurantOfTheFuture : true
	},
	{
		id     : 'latte',
		apiMap : 'drinks_latte',
		label  : 'Latte',
		menu   : 'hot_drinks',
		type   : 'hot',
		order  : 2,
		sizes  : [
			{
				id       : '12oz',
				label    : '12oz',
				/*calories : '',*/
				price    :  API.loc('latte_price_12oz')
			},
			{
				id       : '16oz',
				label    : '16oz',
				price    :  API.loc('latte_price_16oz')
			}
		],
		options : [
			{
				label    : 'Regular',
				calories : '162-190'
			},
			{
				label    : 'Decaf',
				calories : '162-190'
			},
			{
				label    : 'Mocha',
				calories : '270-320'
			}
		],
		restaurantOfTheFuture : true
	},
	{
		id     : 'cappuccino',
		apiMap : 'drinks_cappuccino',
		label  : 'Cappuccino',
		menu   : 'hot_drinks',
		type   : 'hot',
		order  : 3,
		sizes  : [
			{
				id       : '12oz',
				label    : '12oz',
				calories : '75-120',
				price    :  API.loc('cappuccino_price_12oz')
			},
			{
				id       : '16oz',
				label    : '16oz',
				price    :  API.loc('cappuccino_price_16oz')
			}
		],
		restaurantOfTheFuture : true
	},
	{
		id     : 'hot_chocolate',
		apiMap : 'drinks_hot_chocolate',
		label  : 'Hot Chocolate',
		menu   : 'hot_drinks',
		type   : 'hot',
		order  : 4,
		sizes  : [
			{
				id       : '12oz',
				label    : '12oz',
				calories : '240/320',
				price    :  API.loc('hot_chocolate_price_12oz')
			},
			{
				id       : '16oz',
				label    : '16oz',
				price    :  API.loc('hot_chocolate_price_16oz')
			}
		],
		restaurantOfTheFuture : true
	}

]