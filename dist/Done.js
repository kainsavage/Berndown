import '../js/handlebars-v4.0.5.js';

class Template {
    constructor() {
          let template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        this.template = templates['done.html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
            let stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, buffer = 
          "                                                <tr class=\"done "
            + alias4(((helper = (helper = helpers.winner || (depth0 != null ? depth0.winner : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"winner","hash":{},"data":data}) : helper)))
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caucus : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
          stack1 = ((helper = (helper = helpers["else"] || (depth0 != null ? depth0["else"] : depth0)) != null ? helper : alias2),(options={"name":"else","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
          if (!helpers["else"]) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
          if (stack1 != null) { buffer += stack1; }
          return buffer + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.closed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiclosed : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiopen : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.open : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\">\r\n                                                    "
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\r\n                                                    <td class=\""
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.democrat : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.republican : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.swing : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\">\r\n"
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caucus : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(31, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
            + " "
            + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
            + "</td>\r\n                                                    <td>"
            + alias4(((helper = (helper = helpers.winner || (depth0 != null ? depth0.winner : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"winner","hash":{},"data":data}) : helper)))
            + "</td>\r\n                                                    <td class=\"vclinton\">"
            + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.votes : depth0)) != null ? stack1.clinton : stack1)) != null ? stack1.count : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"vclinton percent\">"
            + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.votes : depth0)) != null ? stack1.clinton : stack1)) != null ? stack1.percent : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"vmargin percent\"></td>\r\n                                                    <td class=\"vsanders percent\">"
            + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.votes : depth0)) != null ? stack1.sanders : stack1)) != null ? stack1.percent : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"vsanders\">"
            + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.votes : depth0)) != null ? stack1.sanders : stack1)) != null ? stack1.count : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"clinton\">"
            + alias4(alias5(((stack1 = (depth0 != null ? depth0.delegates : depth0)) != null ? stack1.clinton : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"sanders\">"
            + alias4(alias5(((stack1 = (depth0 != null ? depth0.delegates : depth0)) != null ? stack1.sanders : stack1), depth0))
            + "</td>\r\n                                                    <td class=\"total\">"
            + alias4(alias5(((stack1 = (depth0 != null ? depth0.delegates : depth0)) != null ? stack1.total : stack1), depth0))
            + "</td>\r\n                                                </tr>\r\n";
        },"2":function(container,depth0,helpers,partials,data) {
            return " caucus";
        },"4":function(container,depth0,helpers,partials,data) {
            return " primary";
        },"6":function(container,depth0,helpers,partials,data) {
            return " closed";
        },"8":function(container,depth0,helpers,partials,data) {
            return " semiclosed";
        },"10":function(container,depth0,helpers,partials,data) {
            return " semiopen";
        },"12":function(container,depth0,helpers,partials,data) {
            return " open";
        },"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
            let alias1=container.lambda, alias2=container.escapeExpression;

          return "<td rowspan=\""
            + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
            + "\" class=\"date\">"
            + alias2(alias1((depths[1] != null ? depths[1].date : depths[1]), depth0))
            + "</td>";
        },"16":function(container,depth0,helpers,partials,data) {
            return "dem";
        },"18":function(container,depth0,helpers,partials,data) {
            return "rep";
        },"20":function(container,depth0,helpers,partials,data) {
            return "swing";
        },"22":function(container,depth0,helpers,partials,data) {
            let stack1, alias1=depth0 != null ? depth0 : {};

          return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.closed : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiclosed : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiopen : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.open : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
        },"23":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-circle\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Caucus: Closed\"></i>\r\n";
        },"25":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-times-circle-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Caucus: Semi-closed\"></i>\r\n";
        },"27":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-dot-circle-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Caucus: Semi-Open\"></i>\r\n";
        },"29":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-circle-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Caucus: Open\"></i>\r\n";
        },"31":function(container,depth0,helpers,partials,data) {
            let stack1, alias1=depth0 != null ? depth0 : {};

          return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.closed : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiclosed : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.semiopen : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.open : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "                                                    ";
        },"32":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-square\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Primary: Closed\"></i>\r\n";
        },"34":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-minus-square-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Primary: Semi-closed\"></i>\r\n";
        },"36":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-plus-square-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Primary: Semi-Open\"></i>\r\n";
        },"38":function(container,depth0,helpers,partials,data) {
            return "                                                            <i class=\"fa fa-square-o\" data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"left\" data-content=\"Primary: Open\"></i>\r\n";
        },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
            let stack1;

          return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.states : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
        },"useData":true,"useDepths":true});
    }
}

export const template = new Template().template;