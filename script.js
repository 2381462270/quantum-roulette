// 1. 绑定按钮
const observeBtn = document.getElementById('observeBtn');
const displayArea = document.getElementById('displayArea');

// 2. 你们班同学名单（替换成真实姓名！）
const students = [
  "张三", "李四", "王五", "赵六", "钱七",
  "孙八", "周九", "吴十", "郑十一", "王十二"
];

// 3. 点击按钮触发观测
observeBtn.addEventListener('click', function() {
    // 粒子动画效果（伪）
    displayArea.innerHTML = "<div class='particle'></div><div class='particle'></div><div class='particle'></div>粒子对撞中...";
    
    // 延迟1.5秒出结果（模拟量子计算）
    setTimeout(quantumObserve, 1500);
});

// 4. 量子随机算法
function quantumObserve() {
    // 随机选人
    const randomIndex = Math.floor(Math.random() * students.length);
    const selectedStudent = students[randomIndex];
    
    // 随机生成懂指数 (60%~99%)
    const understandPercent = Math.floor(Math.random() * 40) + 60;
    
    // 随机听讲状态
    const states = ["量子隧穿中", "波函数发散", "能级稳定", "观测干扰强烈", "叠加态震荡"];
    const randomState = states[Math.floor(Math.random() * states.length)];
    
    // 显示结果
    displayArea.innerHTML = `
        <div class="result">
            <div>🚨 观测对象：<span class="highlight">${selectedStudent}</span></div>
            <div>📊 懂指数：<span class="highlight">${understandPercent}%</span></div>
            <div>⚛️ 状态：${randomState}</div>
            <div class="small">（量子相干性：${(Math.random()*0.8 + 0.2).toFixed(2)}）</div>
        </div>
    `;
}