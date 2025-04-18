<!--
 * @Author: ch
 * @Date: 2022-05-26 16:08:17
 * @LastEditors: ch
 * @LastEditTime: 2022-06-02 17:56:04
 * @Description: file content
-->
<template>
	<div class="main">
		<h2 class="title">下载马士兵严选APP</h2>
		<p class="desc"><b>精选好物</b><span></span><b>精致生活</b></p>
		<ul class="group">
			<li class="group--item">
				<div class="qrcode">
					<img class="qrcode--img" src="@/assets/img/down/app-qrcode.png"/>
					<img class="qrcode--icon" src="@/assets/img/down/android.png"/>
				</div>
				<span class="group--item-title">Android</span>
			</li>
			<li class="group--item">
				<div class="qrcode qrcode__disabled">
					<img class="qrcode--img" src="@/assets/img/down/app-qrcode.png"/>
					<img class="qrcode--icon" src="@/assets/img/down/ios.png"/>
				</div>
				<span class="group--item-title">iOS</span>
				<span class="group--item-btn">规划中...</span>
			</li>
			<li class="group--item">
				<div class="qrcode">
					<img class="qrcode--img" src="@/assets/img/down/wx-qrcode.jpg"/>
					<img class="qrcode--icon" src="@/assets/img/down/wx.png"/>
				</div>
				<span class="group--item-title">微信公众号</span>
			</li>
			<li class="group--item">
				<div class="qrcode">
					<img class="qrcode--img" src="@/assets/img/down/h5-qrcode.png"/>
					<img class="qrcode--icon" src="@/assets/img/down/browser.png"/>
				</div>
				<span class="group--item-title">H5</span>
			</li>
		</ul>
		<div class="bg">
			<i class="bg--icon1"></i>
			<i class="bg--icon2"></i>
			<i class="bg--icon3"></i>
			<i class="bg--icon4"></i>
			<i class="bg--icon5"></i>
		</div>
		
	</div>
</template>
<script>
export default {
	layout : 'down'
}
</script>
<style lang="scss" scoped>
.main{
	height: calc(100vh - 132px);
	overflow: hidden;
	position: relative;
}
.title{
	text-align: center;
	font-size: 40px;
	font-family: 'PingFang SC-粗体, PingFang SC';
	font-weight: bold;
	color: #191919;
	margin-top: 115px;
}
.desc{
	text-align: center;
	font-size: 24px;
	font-family: 'PingFang SC-常规体, PingFang SC';
	color: #A8A8A8;
	line-height: 21px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	span{
		margin: 0 15px;
		display: inline-block;
		width: 6px;
		height: 6px;
		background: #A8A8A8;
		border-radius: 6px;
	}
}
.group{
	width: 930px;
	margin: 73px auto;
	display: flex;
	justify-content: space-between;
	z-index: 1;
	position: relative;
	&--item{
		text-align: center;
		&-title{
			display: block;
			font-size: 20px;
			margin: 25px 0;
		}
		&-btn{
			border: 1px solid #ddd;
			color: #A7A7A7;
			font-size: 16px;
			width: 142px;
			height: 40px;
			line-height: 40px;
			display: inline-block;
		}
	}
}
// .qrcode--img:hover + .qrcode--icon{
// 	opacity: 0;
// }
.qrcode{
	width: 180px;
	height: 180px;
	background: url('@/assets/img/down/qrcode.png') no-repeat #F4F3F3 right top;
	background-size: 52px;
	cursor: pointer;
	text-align: center;
	position: relative;
	&--icon{
		position: absolute;
		z-index: 1;
		width: 57px;
		height: 96px;
		left: 62px;
		top: 42px;
		transition: opacity .8s;
		opacity: 1;
	}
	&--img{
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		transition: opacity 1s;
		opacity: 0;
		&:hover{
			opacity: 1;
			+ .qrcode--icon{
				opacity: 0;
			}
		}
	}
	&__disabled{
		cursor: no-drop;
		.qrcode--img:hover{
			opacity: 0;
			+ .qrcode--icon{
				opacity: 1;
			}
		}
	}
}
.bg{
	width: 1920px;
	height: 100%;
	@include adj(transform, translateX(-50%));
	z-index: 0;
	position: absolute;
	left: 50%;
	top: 0;
	i{
		position: absolute;
		display: block;
		background-size: 100%;
	}
	&--icon1{
		bottom: 45px;
		width: 152px;
		height: 257px;
		background-image: url('@/assets/img/down/bg1.png');
	}
	&--icon2{
		top: 148px;
		left: 140px;
		width: 197px;
		height: 214px;
		background-image: url('@/assets/img/down/bg2.png');
		animation: float 4s ease-in-out infinite;
	}
	&--icon3{
		top: 549px;
		left: 960px;
		width: 116px;
		height: 126px;
		background-image: url('@/assets/img/down/bg3.png');
		animation: float 5s ease-in-out infinite;
	}
	&--icon4{
		top: 456px;
		right: 261px;
		width: 133px;
		height: 137px;
		background-image: url('@/assets/img/down/bg4.png');
		animation: float 4s ease-in-out infinite;
	}

	&--icon5{
		top: -72px;
		right: -20px;
		width: 200px;
		height: 200px;
		box-shadow: 0 0 50px #ffc9b6;
		background: #FFF8F2;
		border-radius: 50%;
		filter: blur(50px);
		// background-image: url('@/assets/img/down/bg5.png');
		// background-size: 246px !important ;
		// background-repeat: no-repeat;
		// background-position: center;
	}
}
@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>