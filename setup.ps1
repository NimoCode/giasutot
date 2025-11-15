# Script setup cho Windows PowerShell
# Tự động set execution policy và cài đặt dependencies

Write-Host "🚀 Setting up Gia Sư Tiếng Anh project..." -ForegroundColor Cyan

# Set execution policy cho session này
Write-Host "📝 Setting execution policy..." -ForegroundColor Yellow
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned -Force

# Kiểm tra Node.js
Write-Host "🔍 Checking Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green

# Kiểm tra npm
Write-Host "🔍 Checking npm..." -ForegroundColor Yellow
$npmVersion = npm --version
Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green

# Cài đặt dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Setup completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Run 'npm run dev' to start development server" -ForegroundColor White
    Write-Host "  2. Open http://localhost:3000 in your browser" -ForegroundColor White
} else {
    Write-Host "❌ Setup failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

