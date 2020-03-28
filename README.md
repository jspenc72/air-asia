# air-asia

# Angular Client Development

Install dependencies

```bash
npm i
```

Start development server

```bash
ng serve
```


# Angular Client Deployment

```bash
ng build --extractCss=true --optimization=false
ng build --prod --base-href "air-asia"
```

```bash
docker build -t air-asia .
```

```bash
docker run air-asia -p 4200:4200 
```

# Laravel API Development

1. Start a mysql database
2. Run database migrations and see to create populate database with test data

```bash
php artisan migrate:refresh --seed
```

3. Run the developement server

```bash
php artisan serve
```

# Dependencies

https://cli.angular.io
https://laravel.com
mysql