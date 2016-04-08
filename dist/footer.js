import '../js/handlebars-v4.0.5.js';

class Template {
    constructor() {
          let template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        this.template = templates['footer.html'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
            let stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

          return "\r\n                                                <tr class=\"totals\">\r\n                                                    <td>Total</td>\r\n                                                    <td></td>\r\n                                                    <td></td>\r\n                                                    <td class=\"tcvotes\"></td>\r\n                                                    <td></td>\r\n                                                    <td></td>\r\n                                                    <td></td>\r\n                                                    <td class=\"tsvotes\"></td>\r\n                                                    <td class=\"tclinton\" data-rep=\""
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.clintonDelegates : depth0)) != null ? stack1.rep : stack1), depth0))
            + "\" data-dem=\""
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.clintonDelegates : depth0)) != null ? stack1.dem : stack1), depth0))
            + "\">"
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.clintonDelegates : depth0)) != null ? stack1.total : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"tsanders\" data-rep=\""
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.sandersDelegates : depth0)) != null ? stack1.rep : stack1), depth0))
            + "\" data-dem=\""
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.sandersDelegates : depth0)) != null ? stack1.dem : stack1), depth0))
            + "\">"
            + alias2(alias1(((stack1 = (depth0 != null ? depth0.sandersDelegates : depth0)) != null ? stack1.total : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"ttotal\">"
            + alias2(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"total","hash":{},"data":data}) : helper)))
            + "</td>\r\n                                                </tr>";
        },"useData":true});
    }
}

export const template = new Template().template;