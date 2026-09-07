@echo off
setlocal
cd /d "%~dp0"
echo ========================================
echo      POWER FIT STUDIO - V14
echo ========================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale o Node.js e tente novamente.
  pause
  exit /b 1
)
echo Instalando dependencias, se necessario...
npm install
if errorlevel 1 (
  echo.
  echo Nao foi possivel instalar as dependencias.
  pause
  exit /b 1
)
echo.
echo Iniciando Power Fit Studio...
echo Abra o endereco exibido pelo Vite no navegador.
echo.
npm run dev
pause
