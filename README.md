# dns-movies-new: Сервис поиска фильмов и сериалов, вдохновленный порталами ivi.ru и Кинопоиск.

## Порядок установки и запуска проекта:

- Загрузить приложение из репозитория.
- Разархивировать.
- Открыть приложение в редакторе кода, чтобы в корне (на верхнем уровне) были расположены папки client и server.
- Изменить имя файла .env-example на .env.
- Ввести в консоль и выполнить команду docker compose up postgres
- Дождаться завершения процесса, т.е. пока в консоли не перестанут создаваться новые строки.
- Остановить процесс при помощи команды ctrl + C.
- Ввести в консоль и выполнить команду docker compose --profile dev up
- Открыть приложение в браузере по адресу http://localhost:3000/

## Описание проекта:

### Шапка, перечень элементов и описание функционала:

- Логотип. Предназначен для перехода на главную страницу приложения.
- Основное меню. Первые два элемента содержат ссылку на ivi.ru, остальные - выпадающие окна со ссылками.
- Декоративная кнопка "Оплатить подписку".
- Ссылка, вызывающая меню поиска. Фунционал поиска реализован с поддержкой автосаджеста и переадресацией на соответствующие страницы фильмов в пределах приложения.
- Кнопка вызова всплывающего окна со ссылкой на страницу Авторизации / Регистрации / Выхода из учётной записи, а также с вспомогательными ссылками, ведущими на ivi.ru.
- Кнопка смена языка. Переключает весь текстовый контент приложения с Русского языка на Английский и наоборот.

### Подвал - содержит исключительно декоративные и неинтерактивные элементы.

### Главная страница, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/
- Кнопка перехода на страницу админитсратора. Отображается только если вы авторизованы, как администратор или владелец сервера (данные для входа указаны в разделе "Страница администратора").
- Большой слайдер. Содержит 4 заранее заданных (без использования сервера) слайда, каждый из которых при клике ведёт на страницу со списком фильмов, отфильтрованную по соответствующему жанру.
- Слайдер ТОП-10. Содержит 10 заранее заданных (без использования сервера) слайдов, каждый из которых при клике ведёт на страницу соответствующего фильма.
- 2 маленьких слайдера. Заголовки при клике ведут на страницу со списком фильмов, отфильтрованную по соответствующему жанру. Карточки фильмов при клике ведут на страницу соответствующего фильма. При наведении отображается справочная информация о фильме. Карточки фильмов тянутся с сервера.

### Страница со списком фильмов, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/movies/all
- Хлебные крошки. Отображают иерархию ссылок и меняются исходя из текущего выбранного жанра.
- Заголовок и описание жанра. Меняются исходя из текущего выбранного жанра.
- Фильтры жанра и страны. Отображают заголовок и текущие выбранные элементы, когда они выбраны, или только заголовок, когда нет. При клике вызывается всплывающее окно, позволяющее выбрать элемент, если этого не было сделано ранее, или заменить, если какой-либо элемент уже был выбран. При выборе нового значения фильтра автоматически меняется выдача карточек фильмов.
- Фильтры рейтинга и количества оценок. Реализованы в виде бегунков с заранее заданными шагом и минимальным и максимальным значениями. При изменении значения фильтра автоматически меняется выдача карточек фильмов.
- Фильтры Режиссёра и Актёра. Реализованы в виде автосаджеста с сопутствующим обращением на сервер при каждом изменении поля ввода. Изменение фильтра настроено исключительно на выбор значения из всплывающего окна со значениями, возвращаемыми автосаджестом. Любое другое изменение поля ввода очищает параметр фильтрации по данному полю. Данная логика заложена, для того чтобы исключить возможность возвращения пустого массива фильмов на основе промежуточных значений фильтрации.
- Кнопка Сбросить фильтры. Полностью очищает все параметры фильтрации.
- Поле сортировки. Позволяет задать параметры сортировки. Изменение значения сортировки вызывает повторное обращение на сервер и возвращает новый массив карточек фильмов.
- Раздел с карточками фильмов. Отображает заранее заданное (на основе ширины экрана) количество карточек фильмов, запрошенное на сервере на основании запроса, сформированного на основании установленных фильтров и параметров соритровки.
- Кнопка "Показать ещё". Загружает с сервера дополнительный набор карточек фильмов на основании установленных фильтров и параметров соритровки, но только если данный дополнительный набор присутствует на сервере. В противном случае кнопка не отображается.

### Страница конкретного фильма, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/movie/655800
- Все данные о фильме запрашиваются и загружаются с сервера.
- Хлебные крошки. Отображают иерархию ссылок и меняются исходя из текущего выбранного фильма.
- Трейлер. Отображает трейлер выбранного фильма, в случае его наличия на сервере, или типовой, в случае отсутствия.
- Раздел с описанием фильма. Содержит справочную информацию о фильме.
- Раздел "Рейтинг Иви". Содержит стилизованное всплывающее окно, имитирующее выставление оценки фильму.
- Слайдер "С этим фильмом смотрят". Отображает в виде слайдера соответствующий набор фильмов, полученный с сервера совместно с карточкой фильма.
- Раздел "Актёры и создатели". Отобажает в виде горизонтального списка всех персон, полученных с сервера совместно с карточкой фильма. При клике на заголовок или кнопку "Ещё" вызывается всплывающее окно со вспомогательной информацией (см. далее).
- Раздел "Трейлер и доп. материалы". Позволяет открыть трейлер во всплывающем окне. При клике на заголовок вызывается всплывающее окно со вспомогательной информацией (см. далее).
- Раздел "Отзывы". Содержит перечень отзывов, созданных на текущий момент и имеющих отношение к данному фильму. При клике на загловок и на кнопку "Посмотреть все" вызывается всплывающее окно со вспомогательной информацией (см. далее).
- Раздел "Смотреть на всех устройствах". Содержит композитное изображение, соединящее логотип выбранного фильма и рамки в виде телевизора и планшета, а также кнопку со сслыкой на соответствующий раздел ivi.ru.
- Всплывающее окно со вспомогательной информацией. Содержит 3 вкладки: "Создатели", с полным перечнем всех персон, относящихся к фильму, "Отзывы", с древовидной структурой комментариев к данному фильму, "Трейлер" с возможностью открыть трейлер в дополнительном всплывающем окне.

### Страница актера, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/person/589193
- Все данные об актёре запрашиваются и загружаются с сервера.
- Фотография и имя.
- Раздел "Полная фильмография". Содержит перечень фильмов, в которых задействован данный актёр, с возможностью перейти на страницу выбранного фильма.

### Страница регистрации и авторизации, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/auth/registration
- Поля ввода электронной почты, пароля и подтверждения пароля (только для регистрации). Поле электронной почты содержит базовую валидацию на корректность ввода e-mail. Оба поля пароля содержат валидацию на количество символов (от 4 до 16). В случае с регистрацией также проверяется совпадение значений в полях паролей.
- При нажатии кнопки продолжить на странице регистрации, на сервере производится проверка наличия зарегистрированного пользователя по введённому e-mail. Если e-mail свободен, производится регистрация, если нет - пользователю выводится ошибка.
- При нажатии кнопки продолжить на странице авторизации, на сервере производится проверка наличия зарегистрированного пользователя по введённому e-mail и корректности ввода пароля. Если данные верны, производится авторизация, если нет - пользователю выводится ошибка. 
- Кнопки "Войти через google" и "Войти через Вконтакте" авторизуют пользователя, с использованием учётных данных соответствующих сервисов, а также создаёт новую учётную запись на сервере, если вход с использованием этих данных был произведён впервые.
- Авторизация/регистрация, осуществлённая любым из указанных выше способов, создаёт соответствующую запись локальном хранилище браузера, которая вызывает повторную авторизацию пользователя при обновлении страницы или повторном входе в приложение спустя какое-то время.
- Раздел с Политикой конфиденциальности и Пользовательским соглашением содержит ссылки на соотвествующие разделы ivi.ru.
- Последний раздел содержит кнопку, позволяющую сменить окна регистрации и авторизации.

### Страница администратора, перечень элементов и описание функционала:

- Прямая ссылка: http://localhost:3000/admin
- Данная страница доступна только если вы авторизованы, как администратор или владелец сервера. Для соответствующей авторизации можно использовать логин superuser@superuser.com и пароль Adm1n-Passw0rd
- Хлебные крошки. Отображают иерархию ссылок и меняются исходя из текущего выбранного раздела.
- В первоначальном окне содержатся кнопки перехода на отдельные страницы, предназначенные для редактирования жанров и фильмов.
- При переходе на страницу редактирования жанров/фильмов отображается соответствующий CRUD с элементами, запрошенными на сервере и отсортированными по алфавиту.
- У каждого элемента есть кнопка "Изменить", которая открывает всплывающее окно с возможностью изменения Русского и Английского наименования фильма/жанра.
- При подтверждении изменений проиходит редактирование соответствующего объекта в сохраненных данных пользовательской сессии, а также отправка изменённых данных на сервер для синхронного отображения данных после обновления страницы.

## Дополнительный функционал:

### Тесты:

- Основной функционал приложения покрыт тестами. Реализовано 30 тестов, сгруппированных в 6-ти файлах.
- Тесты расположены в client\src\tests.
- Для вызова функциоанала проверки тестов используется команда npm run test

### Storybook:

- Основные переиспользуемые компоненты приложения визуализированы при помощи storybook. Визуализировано 17 переиспользуемых компонентов.
- Для вызова функциоанала storybook используется команда npm run sb