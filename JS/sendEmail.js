    
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactSubject = document.getElementById('contact-subject'),
        contactTextarea = document.getElementById('contact-message'),
        contactMessage = document.getElementById('message-show')

   const sendEmail = (e) => {
       e.preventDefault()

  if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactTextarea.value === ''){

           //show message and color
           contactMessage.classList.add('color-red')
           contactMessage.textContent='You must complete all fields'
       }else{
        emailjs.sendForm('service_cvfgfw6','template_8uees5q','#contact-form','IpkHEQFau5UDMnkpl')
           .then(() =>{
               contactMessage.classList.add('color-green')
               contactMessage.textContent=' Your message has been sent ✓'

               //to remove message after 5 seconds
               setTimeout(() =>{
                   contactMessage.textContent = ''
                   contactMessage.classList.remove('color-green')
                   contactMessage.classList.remove('color-red')
               } , 5000)
           },(error) => {
               alert('SOMETHING HAS FAILED...' , error)
           })

               //to clear inputs after click submit
               contactName.value = ''
               contactEmail.value = ''
               contactSubject.value = ''
               contactTextarea.value = ''

       }
   }
   contactForm.addEventListener('submit', sendEmail )