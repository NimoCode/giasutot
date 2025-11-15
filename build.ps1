# Script để build project trên Windows
# Tự động set execution policy và chạy npm run build

# Set execution policy cho session này
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned -Force

Write-Host "🏗️ Building project..." -ForegroundColor Cyan
Write-Host "📝 Execution policy set for this session" -ForegroundColor Yellow
Write-Host ""

npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "📦 Output is in the .next directory" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

