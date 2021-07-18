import Logo from '../../../assets/images/logo/logo.png'
import backgroundTwo from '../../../assets/images/background/bg2.png'

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
    <div>
        <div class="container block-section--two">
            <img src=${Logo} alt="Logo Star Wars" width="700px" height="auto">
            <h2>A maior promoção do ano de produtos licenciados!</h2>
            <br><br><br><br><br>
            <h2>Para ofertas receber, cadastrar e-mail você precisa!</h2>
            <br><br>
            <form>
            <input class="form" type="email" name="email" id="email">
            <button class="button" onclick="store()" type="button">Cadastrar e-mail</button>
            <script  type="text/javascript">
              function store(){
                 var inputEmail= document.getElementById("email");
                 localStorage.setItem("email", inputEmail.value);
                }
            </script>
            
            </form>
        </div>
    </div>
</section>
`

export default HomeSectionTwo