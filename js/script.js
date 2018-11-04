function Component(){
    this.elem = null;
    
    this.init = function(sSelector){
        this.elem = $(sSelector);
            if(!this.elem.length){
                console.error('Неверно задан базовый селектор на вход конструктору. См. html -создание объектаы')
            }
    }

    this.findObj = function(sSelector){
         let currentObj = this.elem.find(sSelector);
        if(!currentObj.length){
                  console.error('Неверно задан базовый селектор на вход конструктору. Нет точки.')
        }
        //s.link = s.elem.find('.topLink');
    return currentObj;

    }
}

class Scroll extends Component{
    constructor(sSelector){
      super(sSelector);
      this.init(sSelector); //$(sSelector);
      // метод родительского класса
      this.link = this.findObj('.topLink');// ищет елемент по свойству и возвращает его
      this.link.click(this.slowScroll.bind(this));
        $(window).scroll(this.showHideTopLink.bind(this));
    //методы

}

    showHideTopLink(){
        if($(window).scrollTop()>300){
            this.link.fadeIn(500);
        }
        else {
            this.link.fadeOut(0);
        }
    }
    slowScroll(event){
        event.preventDefault;
        $("html,body").stop().animate({scrollTop:0},"slow");
}
}