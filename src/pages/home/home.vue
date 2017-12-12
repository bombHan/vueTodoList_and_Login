<template>
    <div id="test"> 
	<el-button type="primary" round><a href="index.html">回去总页面</a></el-button>    
	<p>现在的时间是:{{date}}</p>
	<p class="tip">注释：1.以下任务未完成的点击即可显示完成再次点击即删除该项任务  2.点击增加或者按回车即可发布任务  3.任务超出todoList框出现滚动条  4.添加新任务或者完成任务或者删除任务均有相应的消息内容提示   5.点击完成之后完成的任务会被划掉并且相关项都会改变颜色  6.当任务多的时候你可以点击搜索来搜索你需要的任务的id以及完成事项</p>
	<div class="todoList">
		<p class="head">TodoList</p>
		<el-input placeholder="请输入内容"  clearable id="inputText"></el-input>
		<el-button round id="addbtn" type='primary' @click="addItem()" icon='el-icon-plus'>增加</el-button>
		<ul>
			<li v-for="(item,index) in List" :class="{itemDid:item.did}">{{index+1}} . {{item.txt}}<el-button type="danger" round class="delet" @click="delet(index,item.did)">{{item.did?'已完成/可删除':'未完成/点击完成'}}</el-button></li>
		</ul>
		<el-input placeholder="请输入内容"  clearable id="searchText"></el-input>
		<el-button type="primary" icon="el-icon-search" round id="search" @click="search()">搜索</el-button>		
	</div>
	</div>
</template>
<script>

export default {
	data(){
		return {
			List: [{txt:'测试内容1111',did:false},{txt:'测试内容2222',did:false},{txt:'今晚打老虎',did:false}],
			date: (new Date()).toLocaleString()
		}
	},
	methods: {
		updateDate(){
			this.date = (new Date()).toLocaleString()
		},
		open(){ //添加消息成功时弹出的提示
		this.$message({
			message:'添加成功一条消息',
			type:'success'
			});
		},
		didIt(index){ //点击任务完成时弹出的消息提示
			this.$message({
			message:'您已经完成 ('+this.List[index].txt+') 任务！',
			type:'success'
			});
		},
		deleted(){  //任务删除时弹出的消息框
			this.$message({
			message:'已删除该任务！',
			type:'success'
			});
		},
		addItem(){  //添加新任务的功能
			const oInput=document.getElementById('inputText');
			const oAdd=document.getElementById('addbtn');	
			const item={};	
				if(oInput.value!=''){
					item.txt=oInput.value;
					item.did=false;
					this.List.push(item);
					this.open();
				}else{
					alert('请输入内容再添加，谢谢！');
				}			
			oInput.value='';
		},
		delet(index,did){ //如果已经完成则删除，为完成则设置成完成
			if(did){
				this.List.splice(index,1);
				this.deleted();
			}else{
				this.List[index].did=true;
				this.didIt(index);
			}				
		},
		search(){  //搜索功能
			const oSearchTxt=document.getElementById('searchText');
			this.searchResult(oSearchTxt.value);			
		},
		searchResult(topic){ //搜索结果显示的功能制作
		const h = this.$createElement;
		const result=[]; //建立一个result数组来存放搜索出来的结果
		for(let i=0;i<this.List.length;i++){  //根据输入的字符在存放的数据中进行匹配
			for(let j=0;j<topic.length;j++){
				if(this.List[i].txt.indexOf(topic[j])>=0){
					if(result.indexOf(i)<0){  
						result.push(i); //得到匹配成功的从0开始的序号
					}
				}
			}
		}
		for(let i=0;i<result.length;i++){
			result[i]++; //使匹配的序号从1开始
		}
		console.log(result);
        this.$notify({
          title: topic==='' ?'"空"的搜索结果序号如下：':'"'+topic+'"的相关搜索结果序号如下：',
		  message: result.join('')==='' ? '抱歉，未找到所匹配的任务项！':result.join(' '),
		  duration: 5000
        });
      }

	},
	created(){
		
	},
	mounted(){
		this.timer = setInterval(()=>{
			this.updateDate()
		}, 1000);

		const oInput=document.getElementById('inputText');
		const _this=this;
		oInput.addEventListener('keydown',function(ev){ //输入时敲击enter键触发函数
			if(ev.keyCode===13){
				_this.addItem();
			}			
		});
		const oSearchTxt=document.getElementById('searchText');
		oSearchTxt.addEventListener('keydown',function(ev){  //搜索框敲击enter触发搜索功能
			if(ev.keyCode===13){
				_this.search();
			}
		});
	},
	beforeDestroyed(){
		clearInterval(this.timer)
	}
}
</script>
<style lang='less'>

#test{
	padding: 0;
	margin: 0;
	.tip{
		width: 600px;

	}
	.todoList{
		.head{
			text-align: center;
			font-weight: bold;
		}
		width: 400px;
		height: 420px;
		margin: 20px auto;
		border-radius: 6px;
		border: 1px solid #999;
		.el-input{
			width: 260px;
			height: 30px;
			margin: 0 20px;
			.el-input__suffix{
				margin-top: 5px
			}
		}
		#addbtn{
			width: 80px;
			padding: 12px;
		}
		ul{
			list-style-type:none;
			width: 320px;
			height: 240px;
			overflow: auto;
			li{
				margin: 10px 0 0 0;
				width: 100%;
				height: 30px;
				line-height: 30px;
				overflow: auto;
				.delet{
					padding: 6px;
					font-size: 14px;
					float: right;
				}
			}
			li.itemDid{
				text-decoration: line-through;
				color: #999;
				.delet{
					background: #999;
					border-color:#999; 
				}
			}
		}
		#search{
			padding: 12px;
		}
		.result{
			display: inline-block;
			font-size: 12px;
		}
		

	}

}

</style>