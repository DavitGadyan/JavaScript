// create modules for restricting access and modularity of codebase


// BUDGET CONTROLLER module

var budgetController = (function(){

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value

	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value

	};

	var data = {

		allitems : {
			exp : [],
			inc : [],
		},

		totals : {
			exp : 0,
			inc : 0,
		},

		budget: 0,
		percentage:-1,
	};

	var calculateTotal = function(type){
		var sum = 0

		data.allitems[type].forEach(function(cur){

			sum += cur.value
		});

		data.totals[type] = sum;

	};

	return {
		addItem: function(type, des, val){

			var newItem, ID;

			if (data.allitems[type].length > 0){
				ID = data.allitems[type][data.allitems[type].length -1 ].id + 1

			}else{
				ID = 0;
			}

			if (type === 'exp'){
				newItem = new Expense(ID, des, val)
			}else if(type === 'inc'){
				newItem = new Income(ID, des, val)
			}

			data.allitems[type].push(newItem);
			return newItem;
		},

		calculateBudget : function(){

			// calculate total income and expenses
			calculateTotal('exp');
			calculateTotal('inc');

			// calculate budget : income - expense
			data.budget = data.totals.inc - data.totals.exp

			// calculate percentage expense/income
			if (data.totals.inc > 0){data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
			} else{
				data.percentage = -1
			}
			

		},

		getBudget: function(){

			return {
				budget : data.budget,
				totalInc : data.totals.inc,
				totalExp : data.totals.exp,
				percentage : data.percentage,


			}
		},

		testing: function(){
			console.log(data)
		}
	}

})();


// UI CONTROLLER module

var UIController = (function(){
	var DOMstrings = {
		type : '.add__type',
		description : '.add__description',
		value : '.add__value',
		btn : '.add__btn',
		incomeContainer : '.income__list',
		expenseContainer : '.expenses__list',
		budgetLabel : '.budget__value',
		incomeLabel : '.budget__income--value',
		expenseLabel : '.budget__expenses--value',
		percentageLabel : '.budget__expenses--percentage',
	}

	return {

		getInput : function() {

			return {
			type : document.querySelector(DOMstrings.type).value, // inc exp
			description : document.querySelector(DOMstrings.description).value,
			value : parseFloat(document.querySelector(DOMstrings.value).value),

			}

		},

		addListItem : function(obj, type){

			// get html string with placeholders
			if (type === 'inc'){
				element = DOMstrings.incomeContainer
				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			}else if (type === 'exp'){
				element = DOMstrings.expenseContainer
				html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div>'
			}

			// replace placeholders with real values

			newHTML = html.replace('%id%', obj.id)
			newHTML = newHTML.replace('%description%', obj.description)
			newHTML = newHTML.replace('%value%', obj.value)

			// insert html into page DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)


		},

		clearFields :  function(){

			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.description + ', ' + DOMstrings.value);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, index, array){

				current.value = "";
			});
			fieldsArr[0].focus()
		},

		displayBudget : function(obj){

			document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget
			document.querySelector(DOMstrings.incomeLabel).textContent = '+ ' + obj.totalInc
			document.querySelector(DOMstrings.expenseLabel).textContent = '- ' + obj.totalExp

			if (obj.percentage > 0){document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + ' %'
			} else {
				document.querySelector(DOMstrings.percentageLabel).textContent = '---'
			}
			
		},

		getDOM : function(){

			return DOMstrings
		},


	}



})();

// GLOBAL APP CONTROLLER module

var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function() {
		var DOM, budget;
		DOM = UICtrl.getDOM();

		document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){

			if (event.keyCode === 13 || event.which === 13){
				ctrlAddItem();
			}
	});


	};
	var updateBudget = function (){


			// calculate budget
			budgetCtrl.calculateBudget()

			// return budget
			budget = budgetCtrl.getBudget()

			//update budget UI
			console.log(budget);
		};

	var ctrlAddItem = function(){
		var input, newItem;
		// read input data

		input = UICtrl.getInput();

		if (input.description !== "" && !isNaN(input.value) && input.value > 0){
			// update budget controller
			newItem = budgetCtrl.addItem(input.type, input.description, input.value)

			// update ui
			UICtrl.addListItem(input, input.type)

			// clear input fields
			UICtrl.clearFields()

			// update budget
			updateBudget()

			// update UI budget
			UICtrl.displayBudget(budget)
		}

	};

	return {
		init : function(){
			UICtrl.displayBudget({
				budget : 0,
				totalInc : 0,
				totalExp : 0,
				percentage : -1,


			})
			console.log('Application has started!');
			setupEventListeners();


		}
	}


})(budgetController, UIController);


controller.init();