const timeline = gsap.timeline({defaults: { duration: 1}})

timeline
        .from('.header', {y: '-100%', ease: 'bounce'})
        .from('.title', {opacity: 0, stagger: .2})
        .from('.footer', {y: '100%', ease: 'elastic'}, 1)
        .to('.wheels', {rotation: 360, repeat: -1, duration: .5})
        .from('.bus', {duration: 4, x: '-100vw', ease: 'power3.easInOut'}, 0)
        .from('.bus', {x: 1500, duration: 15, ease: 'power6.easeInOut'})
        
        
        

        
        



