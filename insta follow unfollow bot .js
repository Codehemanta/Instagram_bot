// 2 secend
let timer = 2000;
for (var i = 0; i <20 ; i++) {
	setTimeout(()=>{
		document.getElementsByClassName('_5f5mN')[0].click()
		console.log('follow')
	},timer)
	//add extra time
	timer +=2000;
	setTimeout(()=>{
		document.getElementsByClassName('_5f5mN')[0].click()
	},timer)
	timer +=2000;

	setTimeout(()=>{
		document.getElementsByClassName('aOOlW ')[0].click()
		console.log('unfollow')
	},timer)
	timer +=2000;

}
