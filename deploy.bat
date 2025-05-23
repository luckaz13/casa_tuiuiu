@echo off
echo ========================================
echo    ATUALIZANDO SITE CASA TUIUIU
echo ========================================
echo.

echo Adicionando arquivos alterados...
git add .

echo.
echo Digite uma mensagem para descrever as alteracoes (ou pressione Enter para usar mensagem padrao):
set /p commit_msg="Mensagem: "

if "%commit_msg%"=="" (
    set commit_msg=Atualizacao automatica do site Casa Tuiuiu
)

echo.
echo Fazendo commit com a mensagem: "%commit_msg%"
git commit -m "%commit_msg%"

if %errorlevel% equ 0 (
    echo.
    echo Enviando alteracoes para o GitHub...
    git push origin master
    
    if %errorlevel% equ 0 (
        echo.
        echo ========================================
        echo   SUCESSO! Site atualizado com sucesso!
        echo   Seu site estara disponivel em alguns minutos em:
        echo   https://luckaz13.github.io/casa_tuiuiu/
        echo ========================================
    ) else (
        echo.
        echo ERRO: Falha ao enviar para o GitHub
        echo Verifique sua conexao com a internet
    )
) else (
    echo.
    echo Nenhuma alteracao encontrada para fazer commit
)

echo.
pause