const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Hàm này có nghĩa là tạo ra một biến $ là một hàm tìm kiếm phần tử 
//trên trang web bằng cách sử dụng phương thức document.querySelector 
//của đối tượng document . Bằng cách này ta có thể sử dụng biến  $
//để viết code ngắn gọn hơn khi tìm kiếm phần tử trên trang web .
//Ví dụ, thay vì viết document.querySelector('.class-name'), chúng ta
//có thể viết ngắn gọn hơn là $('.class-name')

const tabs = $$('.tab-item');
//console.log(tabs[3].clientHeight);
//Chỗ này nếu muốn xem thuộc tính phần tử của nó thì ta ko cần dùng đến 
//mảng bởi vì nodeList đã ở dạng mảng rồi, muốn xem thuộc tính của 1 phần tử
//nào đó ta chỉ cần thêm chỉ số cho nó rồi trỏ đến thuộc tính cần xem thôi.
const panes = $$('.tab-pane');

const tabActive =$('.tab-item.active');
//console.log([tabActive]);

//Tại sao chỗ này ta lại dùng [tabActive] thay vì dùng tabActive, vì ta 
// muốn truy cập đến mảng của nó để xem các thuộc tính trong phần tử này,
// phần tử này chỉ xem được thuộc tính khi nó là mảng hoặc là object thôi
// vì thế ta phải truyền vào nó thành mảng. Xem thuộc tính của nó để lấy
//ra mà dùng thôi

const line = $('.tabs .line');
//Gọi hàm line này là để lấy thuộc tính thằng line này trong CSS để
//bổ sung thêm thuộc tính cho nó
line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';
//2 dòng lệnh trên dùng để khi trang vừa mới được reload thì mặc định ban 
//đầu nó sẽ có heightLine đủ chiều ngang của nó .

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $('.tab-item.active').classList.remove('active');
//Chỗ này nếu dùng $$ sẽ báo lỗi vì $$ là trả về 1 nodeList (tại 
// querySelectorAll) chứ ko phải trả về 1 phần tử duy nhất. Vì vậy ta phải 
//dùng $ (querySelector)

//Khi ta dùng thuộc tính classList ta phải dùng cho từng đối tượng 1 chứ
// không dùng cho toàn bộ tất cả các phần tử trong mảng. Để làm điều này
// ta nên dùng vòng lặp để duyệt qua mảng rồi thêm từng phần tử trong đó.
// tabs.forEach((tab,index) => {
//     tab.classList.add('active');
//Thêm toàn bộ class active vào trong phần tử tab có mảng là tabs.
// });

    $('.tab-pane.active').classList.remove('active');
//Chỗ này nếú không dùng câu lệnh này thì khi ta ấn vào các thẻ 
// tab nó sẽ hiển thị nội dung ta ấn vào và khi ấn vào tab khác nó cũng 
//sẽ hiển thị nội dung mà không ẩn đi nội dung trước
    this.classList.add('active');
    //Thêm class active vào trong phần tử tab.
    pane.classList.add('active');

    line.style.width = this.offsetWidth + 'px';
    line.style.left = this.offsetLeft + 'px';
    //this ở đây tương ứng với tab nghĩa là khi click vào tab này
    //thì line nó sẽ được bổ sung thêm thuộc tính xét độ rộng và
    //xét bên trái.
  };
})



