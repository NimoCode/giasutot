# Script để chạy development server trên Windows
# Tự động set execution policy và chạy npm run dev

# Set execution policy cho session này
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned -Force

Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
Write-Host "📝 Execution policy set for this session" -ForegroundColor Yellow
Write-Host ""

npm run dev

