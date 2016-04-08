import '../js/handlebars-v4.0.5.js';

class Template {
    constructor() {
          let template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        this.template = templates['navbar.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
            let helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

          return "\r\n        <div class=\"clinton-pic navbar-left\"><div></div></div>\r\n        <div class=\"clinton navbar-text navbar-left\">"
            + alias4(((helper = (helper = helpers.clintonDelegates || (depth0 != null ? depth0.clintonDelegates : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clintonDelegates","hash":{},"data":data}) : helper)))
            + "</div>\r\n        <div class=\"navbar-text navbar-center\">Delegates</div>\r\n        <div class=\"navbar-text navbar-center\" id=\"remaining\">("
            + alias4(((helper = (helper = helpers.remaining || (depth0 != null ? depth0.remaining : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"remaining","hash":{},"data":data}) : helper)))
            + " remaining; "
            + alias4(((helper = (helper = helpers.unpledged || (depth0 != null ? depth0.unpledged : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unpledged","hash":{},"data":data}) : helper)))
            + " unpledged)</div>\r\n        <div class=\"sanders-pic navbar-right\"><div></div></div>\r\n        <div class=\"sanders navbar-text navbar-right\">"
            + alias4(((helper = (helper = helpers.sandersDelegates || (depth0 != null ? depth0.sandersDelegates : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sandersDelegates","hash":{},"data":data}) : helper)))
            + "</div>";
        },"useData":true});
    }
}

export const template = new Template().template;