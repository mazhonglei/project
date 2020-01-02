import originJsonp from 'jsonp'

//封装jsonp
export default function jsonp(url,data,option) {
    return new Promise((resolve,reject)=>{
        originJsonp(url,option,function (err,res) {
            if(!err){
                resolve(res)
            }else{
                resolve(err)
            }
        })
    })

}