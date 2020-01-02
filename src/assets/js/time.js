function f1() {
    var value=new Date();
    let year=value.getFullYear()
    let month=value.getMonth()+1;
    let day=value.getDate();
    return `今天是${year}年${month}月${day}日`;
}

export default f1;