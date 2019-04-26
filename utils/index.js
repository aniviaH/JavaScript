var utils = {
	//检测数据类型
	checkDataType: function(data){
		return Object.prototype.toString.call(data).slice(8, -1);
		/*
			//技术点--Object.prototype.toString.call() 与 Object.prototype.toString()的区别
			//Object.prototype.toString.call() 可用来进行判断数据类型
			//Object.prototype.toString()      无论传入什么，结果都是[object Object]
			Object.prototype.toString.call('') ;   					// [object String]
			Object.prototype.toString.call(1) ;    					// [object Number]
			Object.prototype.toString.call(true) ; 					// [object Boolean]
			Object.prototype.toString.call(undefined) ; 			// [object Undefined]
			Object.prototype.toString.call(null) ; 					// [object Null]
			Object.prototype.toString.call(new Function()) ; 		// [object Function]
			Object.prototype.toString.call(new Date()) ; 			// [object Date]
			Object.prototype.toString.call([]) ; 					// [object Array]
			Object.prototype.toString.call(new RegExp()) ; 			// [object RegExp]
			Object.prototype.toString.call(new Error()) ; 			// [object Error]

			Object.prototype.toString('') ;   						// [object Object]
			Object.prototype.toString(1) ;    						// [object Object]
			Object.prototype.toString(true) ; 						// [object Object]
			Object.prototype.toString(undefined) ; 					// [object Object]
			Object.prototype.toString(null) ; 						// [object Object]
			Object.prototype.toString(new Function()) ; 			// [object Object]
			Object.prototype.toString(new Date()) ; 				// [object Object]
			Object.prototype.toString([]) ; 						// [object Object]
			Object.prototype.toString(new RegExp()) ; 				// [object Object]
			Object.prototype.toString(new Error()) ; 				// [object Object]
		*/
	},

}