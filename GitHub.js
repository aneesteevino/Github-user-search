console.log("hello world")
const search_users=document.getElementById('search_users')
const search_btn=document.getElementById('search_btn')
let user_photo=document.getElementById('user_photo')
let acc_name=document.getElementById('acc_name')
let bio=document.getElementById('bio')
let link=document.getElementById('link')


let user_image=''
let user_name=''
let user_bio=''
let acoount_link=''

search_btn.addEventListener('click',async()=>{
    let value=search_users.value
      if( value==''|| value==null || value==undefined){
        return 
      }

      const GitHub_Users_Api= await fetch(`https://api.github.com/users/${value}`) //json iss value ko convert krega js mai 
      const data= await GitHub_Users_Api.json()
      user_image=(data['avatar_url'])
      user_name=(data['login'])
      user_bio=(data['bio'])
      acoount_link=(data['url'])


      user_photo.src=user_image
     acc_name.innerHTML=user_name
     bio.innerHTML=user_bio


    console.log(data)
    search_users.value=''
})