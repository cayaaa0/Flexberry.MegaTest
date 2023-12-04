docker build --no-cache -f SQL\Dockerfile.PostgreSql -t mega_test/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t mega_test/app ../..
