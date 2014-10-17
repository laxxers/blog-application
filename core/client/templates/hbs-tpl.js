this["JST"] = this["JST"] || {};

this["JST"]["list-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n        		<span class=\"published\">Published "
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'timeago': ("True")
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.updated_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.updated_at), options)))
    + "</span>\r\n        	";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n        		<span class=\"draft\">Draft</span>\r\n        	";
  }

  buffer += "<a class=\"fade\" href=\"#\">\r\n    <h3 class=\"entry-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\r\n    <section class=\"entry-meta\">\r\n        <span class=\"status\">\r\n        	";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "published", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.status), "published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        	";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "draft", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.status), "draft", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </span>\r\n    </section>\r\n</a>\r\n";
  return buffer;
  });

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"login\" class=\"login-form\" method=\"post\" novalidate=\"novalidate\" action=\"/admin/signin/\">\r\n    <div class=\"email-wrap\">\r\n        <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" autofocus />\r\n    </div>\r\n    <div class=\"password-wrap\">\r\n        <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\"/>\r\n    </div>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n    <section class=\"meta\">\r\n        <a class=\"forgotten-password\" href=\"#\">Forgotten password?</a>\r\n    </section>\r\n</form>\r\n";
  });

this["JST"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-";
  return buffer;
  }

  buffer += "<section class=\"notification ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.type), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "notification ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "notification js-notification\">\r\n  ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  <a class=\"close\" href=\"#\"><span class=\"hidden\">Close</span></a>\r\n</section>\r\n\r\n";
  return buffer;
  });

this["JST"]["preview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<header class=\"preview-header\">\r\n    <section class=\"post-control\">\r\n   		<small><i class=\"fa fa-bookmark-o\"></i> &nbsp;&nbsp;PUBLISHED by "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " &nbsp;&nbsp;\r\n    		|&nbsp;&nbsp;"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'format': ("MMM Do")
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.created_at), options)))
    + " </small>\r\n        <a href=\"/admin/editor/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\"  class=\"pull-right fade\"><i class=\"fa fa-trash-o\"></i></a>          \r\n        <a href=\"/admin/editor/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\" class=\"pull-right fade\"><i class=\"fa fa-pencil\"></i></a>\r\n    </section>\r\n</header>\r\n<div class=\"wrapper\"><h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>";
  if (helper = helpers.html) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n";
  return buffer;
  });

this["JST"]["settings/general"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\r\n    <h1 class=\"title\">General</h1>\r\n    <section class=\"page-actions\">\r\n        <button class=\"btn btn-success save\">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content\">\r\n	<form id=\"settings-general\" novalidate=\"novalidate\">\r\n		<div class=\"form-group\">\r\n			<label for=\"blog-title\">Blog Title</label>\r\n			<input type=\"text\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"blog-title\" />\r\n			<p>The name of your blog</p>\r\n		</div>\r\n\r\n		<div class=\"form-group description-container\">\r\n			<label for=\"blog-description\">Blog Description</label>\r\n			<textarea id=\"blog-description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n			<p>\r\n			Describe what your blog is about\r\n			<span class=\"word-count\">0</span>\r\n			</p>\r\n		</div>\r\n\r\n		<div class=\"form-group\">\r\n		    <label for=\"blog-cover\">Blog Cover</label>\r\n		        <a class=\"btn btn-primary\">Upload Image</a>\r\n		    <p>Display a cover image on your site</p>\r\n		</div>	\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"activeTheme\">Theme</label>\r\n            <select id=\"activeTheme\" name=\"general[activeTheme]\">\r\n            	<option value=\"\">Default</option>\r\n            </select>\r\n            <p>Select a theme for your blog</p>\r\n        </div>\r\n\r\n		<div class=\"form-group\">\r\n		    <label for=\"blog-cover\">Connection</label>\r\n		        <a class=\"btn btn-primary\">Establish Connection</a>\r\n		    <p>Connect to the publishing platform</p>\r\n		</div>	        \r\n	</form>	\r\n</section>\r\n\r\n";
  return buffer;
  });

this["JST"]["settings/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\r\n    <h1 class=\"title\">Settings</h1>\r\n</header>\r\n<nav class=\"settings-menu\">\r\n    <ul>\r\n        <li class=\"general active\"><a href=\"#general\" class=\"fade\"><i class=\"fa fa-cog\" style=\"padding-right: 2em;\"></i> General</a></li>\r\n        <li class=\"users\"><a href=\"#user\" class=\"fade\"><i class=\"fa fa-user\" style=\"padding-right: 2em;\"></i> User</a></li>\r\n    </ul>\r\n</nav>";
  });

this["JST"]["settings/user"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\r\n    <h1 class=\"title\">User Profile</h1>\r\n    <section class=\"page-actions\">\r\n        <button class=\"btn btn-success\">Save</button>\r\n    </section>\r\n</header>\r\n\r\n<section class=\"content\">\r\n	<form id=\"settings-general\" novalidate=\"novalidate\">\r\n		<div class=\"form-group\">\r\n			<label for=\"blog-title\">User Title</label>\r\n			<input type=\"text\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"blog-title\" />\r\n			<p>The name of your blog</p>\r\n		</div>\r\n</section>";
  return buffer;
  });