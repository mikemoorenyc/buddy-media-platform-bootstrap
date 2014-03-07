<script>

// menu plugin
// full version here: https://github.com/buddymedia/Style-Guide/blob/master/clients/AirAsia/desktop/menu.js

var Menu=function(e){this.moduleName=e.moduleName||"";this.labelText=e.labelText||"Select"};Menu.prototype={menuWrapper:function(e){var t,n,r;t=$("<div />",{"class":"menu"});n=$("<span />",{"class":"menu__label",text:this.labelText});r=$("<span />",{"class":"menu__button",text:"Menu"});t.append(n,r);this.categories.before(t);this.menu=t;this.menuTrigger=r},currentCategory:function(){var e=$("<div />",{"class":"current-category",text:this.categories.find(".active a").text()});this.categories.after(e);this.currentCategoryEl=e},updateCurrentCategory:function(e){this.currentCategoryEl.text(e)},hideCategories:function(){this.categories.addClass("is-hidden")},showCategories:function(e){this.categories.toggleClass("is-hidden");e.stopPropagation()},switchCategory:function(e){var t=$(e.target).text();this.hideCategories();this.updateCurrentCategory(t)},init:function(){this.cacheElements();this.hideCategories();this.menuWrapper();this.currentCategory();this.bindEvents()},cacheElements:function(){this.categories=$(".categories",this.moduleName)},bindEvents:function(){this.menuTrigger.on("click",$.proxy(this.showCategories,this));this.menu.on("click",$.proxy(this.showCategories,this));this.categories.on("click","li",$.proxy(this.switchCategory,this))}}



!function( $ ) {
    $(function() {

        var categoriesMenu = new Menu({
            moduleName: '#mod_guides',
            labelText: $( '.categoryLabel' ).text()
        });
        categoriesMenu.init();
    });
}( jQuery );

</script>
