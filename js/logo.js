colour.addEventListener('click', e =>{
    e.preventDefault()
    let color = document.getElementById('colortype')
    let log = document.getElementById('logo')
    let colur = document.getElementById('colur')
    let type = document.getElementById('type')
    let colour = document.getElementById('colour')
    let types = document.getElementById('types')
    let logo_variations = document.getElementById('logo_variations')
    let variation = document.getElementById('variation')
    let warnings = document.getElementById('warnings')
    
    
    secondcol=`<h1>Paleta de colores</h1> <div id="circles">
                    <div class="localbox">
                    <div id="circle1"></div>
                    <p> RGB 56, 56, 56<br>
                        HEX #383838</p>
                    </div>
                    <div class="localbox">
                    <div id="circle2"></div>
                    <p> RGB 31, 92, 121<br>
                        HEX #1F5C79</p>
                    </div>
                    <div class="localbox">
                    <div id="circle3"></div>
                    <p>RGB 41, 179, 206<br>
                        HEX #29B3CE</p>
                    </div>
                    <div class="localbox">
                    <div id="circle4"></div>
                    <p>RGB 247, 131, 45<br>
                        HEX #F7832D</p>
                    </div>
                    <div class="localbox">
                    <div id="circle5"></div>
                    <p>RGB 45, 10, 86<br>
                        HEX #2d0a56</p>
                    </div>
                </div>
  
                `
        

 colur.innerHTML=secondcol
 //type.innerHTML=secondtype
 type.style.display="none"
 logo_variations.style.display="none"
 warnings.style.display="none"
 colur.style.display="contents"
 variation.setAttribute('class','menu')
 colour.setAttribute('class','new_menu')
 types.setAttribute('class','menu')
 caution.setAttribute('class','menu')
 color.setAttribute('class','new')
 color.style.setProperty("visibility","visible")
 color.style.setProperty("opacity","1")
 color.style.setProperty("transition","all 5s ease")
 log.style.paddingTop="180px"
 log.style.width="350px"
 log.setAttribute('class','newlog')


 
 

})

types.addEventListener('click', e =>{
    e.preventDefault()
    let color = document.getElementById('colortype')
    let log = document.getElementById('logo')
    let colur = document.getElementById('colur')
    let type = document.getElementById('type')
    let types = document.getElementById('types')
    let colour = document.getElementById('colour')
    let logo_variations = document.getElementById('logo_variations')
    let variation = document.getElementById('variation')
    let warnings = document.getElementById('warnings')
    

    secondtype=` <h1>Tipografia</h1>
                <div id="fonts">
                    <div><p id="font1">Surfing Whales</p>
                        <div>SEGOE SCRIPT</div>
                    </div>
                    <div><p id="font2">Code & creative lab</p>
                        <div>NIRMALA UI</div>
                    </div>
                
                </div>
            `
     
 type.innerHTML=secondtype
 colur.style.display="none"
 logo_variations.style.display="none"
 warnings.style.display="none"
 type.style.display="contents"
 variation.setAttribute('class','menu')
 caution.setAttribute('class','menu')
 types.setAttribute('class','new_menu')
 colour.setAttribute('class','menu')
 color.setAttribute('class','new')
 color.style.setProperty("visibility","visible")
 color.style.setProperty("opacity","1")
 color.style.setProperty("transition","all 5s ease")
 log.style.paddingTop="180px"
 log.style.width="350px"
 log.setAttribute('class','newlog')
})

variation.addEventListener('click', e =>{
    e.preventDefault()
   let logo_variations = document.getElementById('logo_variations')
   let color = document.getElementById('colortype')
   let log = document.getElementById('logo')
   let types = document.getElementById('types')
   let colour = document.getElementById('colour')
   let variation = document.getElementById('variation')
   let colur = document.getElementById('colur')
   let type = document.getElementById('type')
   let warnings = document.getElementById('warnings')

   thirdtype = ` <h1>Variaciones de logo</h1>
                    <div id="sectlogos">
                      <img src='img/variation1.jpeg' id="caption1">
                      <img src='img/variation2.jpeg' id="caption2">
                      <img src='img/Captura.PNG' id="caption">
                    </div>
`
    
logo_variations.innerHTML=thirdtype

colur.style.display="none"
type.style.display="none"
warnings.style.display="none"
logo_variations.style.display="contents"
color.setAttribute('class','new2')
color.style.setProperty("visibility","visible")
color.style.setProperty("opacity","1")
color.style.setProperty("transition","all 5s ease")
colour.setAttribute('class','menu')
types.setAttribute('class','menu')
caution.setAttribute('class','menu')
variation.setAttribute('class','new_menu')
logo_variations.style.setProperty("opacity","1")
logo_variations.style.setProperty("transition","all 5s ease")
logo_variations.style.setProperty("visibility","visible")
log.setAttribute('class','disapear')

})

caution.addEventListener('click', e =>{
    e.preventDefault()
   let logo_variations = document.getElementById('logo_variations')
   let color = document.getElementById('colortype')
   let log = document.getElementById('logo')
   let warnings = document.getElementById('warnings')
   let types = document.getElementById('types')
   let colour = document.getElementById('colour')
   let variation = document.getElementById('variation')
   let caution = document.getElementById('caution')

   fourthtype = ` <div id="first_sect">
                   <h1>Usos no permitidos</h1>
                    <ul id="sectwarning">
                      <li>No realizar ningun cambio sin la autorización del creativo.</li>
                      <li>Prohibido el uso comercial.</li>
                      <li>Uso autorizado con propósitos de identificación o de información de la marca.</li>
                    </ul>
                    </div>
                    <div id="not_logo">
                        <div id="equis">
                        <i class="fas fa-times"></i><img src="img/logo.png" id="notlog">
                        </div>
                        <div id="equis">
                             <i class="fas fa-times"></i><img src="img/ooo.PNG" id="notlog3">
                        </div>
                        <div id="equis">
                        <i class="fas fa-times"></i><img src="img/perspective.png" id="notlog1">
                        </div>
                        <div id="equis">
                             <i class="fas fa-times"></i><img src="img/loag.PNG" id="notlog2">
                        </div>
                    </div>
`
    
warnings.innerHTML=fourthtype

colur.style.display="none"
type.style.display="none"
warnings.style.display="contents"
color.setAttribute('class','new2')
logo_variations.style.display="none"
colour.setAttribute('class','menu')
types.setAttribute('class','menu')
variation.setAttribute('class','menu')
caution.setAttribute('class','new_menu')
color.style.setProperty("opacity","1")
color.style.setProperty("visibility","visible")
log.setAttribute('class','disapear')

})