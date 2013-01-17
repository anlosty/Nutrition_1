//ф-ции отображающие экраны приложения
var startView = function () {
	console.log("display start view");
};

var findProductView = function () {
	console.log("display search to all product");
};

var addProductView = function () {
	console.log("display adding product view");
};

var reportView = function () {
	console.log("display report for today");
};
//хранит список всех продуктов(массив)
var productList = []; 

//создает новый продукт
function createProduct (name, weight, cal, fat, carb, prot) {
     //создает объект продукта с заданными параметрами
    var newProduct = {
		name: name,
		weight: weight,
		callories: cal,
		fat: fat,
		carbohydrate: carb,
		protein: prot
	};
	//добавляем продукт в массив
	productList.push(newProduct);
	var newProductId = productList.length - 1;
     return newProductId
}

//удаляет продукт
function deleteProduct ( productId ) {
	// удалить продукт из массива (productList) используя id продукта - номер элемента в массиве
}

//поиск продукта по имени
function searchProduct ( name) {
	// исползуя цикл for, пройти по каждому элементу массива,и вернуть первый элемент, имя которого совпадает с переданным
    return resultProductId
}

//создает порцию
function createPortion  ( productId, weight ){
     return newPortionId
}

//удаляет порцию
function deletePortion ( portionId ) {}

//возращает список порций за указанный промежуток времени
function reportPortion ( createFrom, createTo ){

     return listPortion 
}

// Тестовые переменные и функции

var product01 = {
	name: "Apple",
	weight: 100,
	callories: 52,
	fat: 0.17,
	carbohydrate: 14,
	protein: 0.3
};

var product02 = {
	name: "Beef",
	weight: 100,
	callories: 288,
	fat: 19.5,
	carbohydrate: 0,
	protein: 26
};

var product03 = {
	name: "Chocolate",
	weight: 100,
	callories: 500,
	fat: 34,
	carbohydrate: 60,
	protein: 4
};

// функция для тестирование удаления продукта
var testForRemoveProduct = function () {
	// наполняем массив продуктов тестовыми данными
	createProduct(productParameters_1);
	createProduct(productParameters_2);
	createProduct(productParameters_3);
	// длинна массива должна быть 3
	if (productList.length !== 3) {
		console.error("Ошибка теста! Длина массива должна быть равна 3");
		return;
	}
	// удаляем 2-й продукт
	deleteProduct(2);

	// теперь длина массива должна быть 2
	if (productList.length !== 2) {
		console.error("Ошибка теста! Длина массива должна быть равна 2");
		return;
	}
	console.log("Тест пройден успешно!!!");
}


// для тестирования поиска
var testForSearchProduct = function () {
	// наполняем тестовую базу данных
	var id1 = createProduct(productParameters_1);
	var id2 = createProduct(productParameters_2);
	var id3 = createProduct(productParameters_3);

	var resultProductId = searchProduct("Beef");
	if (resultProductId !== id2) {
		console.error("Функция поиска работает не правильно! Найден ошибочный продукт", resultProductId);
		return;
	}
	console.log("Тест пройден успешно!!!");
};