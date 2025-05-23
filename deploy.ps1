# Script PowerShell para deploy automatico do site Casa Tuiuiu
# Autor: Assistente IA
# Data: $(Get-Date -Format "dd/MM/yyyy")

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    ATUALIZANDO SITE CASA TUIUIU" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se estamos em um repositorio Git
if (-not (Test-Path ".git")) {
    Write-Host "ERRO: Este diretorio nao e um repositorio Git!" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Verificar status do Git
Write-Host "Verificando alteracoes..." -ForegroundColor Yellow
$status = git status --porcelain

if ($status) {
    Write-Host "Alteracoes encontradas:" -ForegroundColor Green
    git status --short
    Write-Host ""
    
    # Adicionar arquivos
    Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
    git add .
    
    # Solicitar mensagem de commit
    $commitMsg = Read-Host "Digite uma mensagem para o commit (ou pressione Enter para usar padrao)"
    
    if ([string]::IsNullOrWhiteSpace($commitMsg)) {
        $commitMsg = "Atualizacao automatica - $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    }
    
    # Fazer commit
    Write-Host "Fazendo commit..." -ForegroundColor Yellow
    git commit -m $commitMsg
    
    if ($LASTEXITCODE -eq 0) {
        # Push para GitHub
        Write-Host "Enviando para GitHub..." -ForegroundColor Yellow
        git push origin master
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "========================================" -ForegroundColor Green
            Write-Host "   SUCESSO! Site atualizado!" -ForegroundColor Green
            Write-Host "========================================" -ForegroundColor Green
            Write-Host "Seu site estara disponivel em alguns minutos em:" -ForegroundColor White
            Write-Host "https://luckaz13.github.io/casa_tuiuiu/" -ForegroundColor Cyan
            Write-Host ""
            Write-Host "GitHub Pages pode levar 1-5 minutos para atualizar." -ForegroundColor Yellow
        } else {
            Write-Host "ERRO: Falha ao enviar para GitHub" -ForegroundColor Red
            Write-Host "Verifique sua conexao e credenciais" -ForegroundColor Yellow
        }
    } else {
        Write-Host "ERRO: Falha no commit" -ForegroundColor Red
    }
} else {
    Write-Host "Nenhuma alteracao encontrada." -ForegroundColor Yellow
    Write-Host "Todos os arquivos ja estao atualizados no GitHub." -ForegroundColor Green
}

Write-Host ""
Read-Host "Pressione Enter para sair"