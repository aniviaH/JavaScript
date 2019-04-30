//检测数据类型
function checkDataType(target){
	return Object.prototype.toString.call(target).slice(8, -1);
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
}

//深拷贝--实现深度克隆--对象/数组
function cloneDeep(target){
	//判断拷贝的数据类型
	//初始化变量result 成为最终克隆的数据
	let result,
		targetType = checkDataType(target);
	if(targetType === 'Object'){
		result = {};
	}else if(targetType === 'Array'){
		result = [];
	}else{
		return target;
	}
	//遍历目标数据
	for(let i in target){
		//获取遍历数据结构的每一项值和判断数据类型
		let value = target[i];
		let valueType = checkDataType(value);
		if(valueType === 'Object' || valueType === 'Array'){
			//对象/数组里嵌套了对象/数组
			//继续遍历获取到value值
			result[i] = cloneDeep(value);
		}else{
			//获取到value值是基本的数据类型或者是函数。
			result[i] = value;
		}
	}
	return result;
}


