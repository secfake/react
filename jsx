==================== hello word ========================
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
==================== jsx ========================
const element = <h1>Hello, world!</h1>;
=> Cú pháp thẻ này không phải là một chuỗi kí tự cũng không phải là một thẻ HTML

=======================Nhúng Biểu thức trong JSX====================================
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

=======================JSX cũng là một biểu thức====================================
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

=======================JSX là đối tượng====================================

--------
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
-----
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
React.createElement() thực hiện một số kiểm tra để giúp bạn viết mã không bị lỗi nhưng cơ bản nó tạo một đối tượng giống thế này:
// Lưu ý: cấu trúc nãy đã được đơn giản hoá
          const element = {
            type: 'h1',
            props: {
              className: 'greeting',
              children: 'Hello, world!'
            }
          };
