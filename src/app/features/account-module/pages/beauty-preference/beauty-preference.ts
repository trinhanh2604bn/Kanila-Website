import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Để dùng ngModel cho search

// --- INTERFACES (Bạn có thể đặt trong một file models.ts riêng) ---
interface FilterOption {
  value: string;
  label: string;
  selected: boolean;
}

interface FilterGroup {
  id: string; // e.g., 'skinTone', 'brand'
  label: string; // e.g., 'Màu Da', 'Thương Hiệu'
  type: 'single-select' | 'multi-select' | 'brand-search';
  options?: FilterOption[]; // Cho single/multi-select
  searchValue?: string; // Cho brand-search
  isExpanded: boolean; // Trạng thái mở/đóng của từng nhóm filter
  selectedDisplay: string; // Text hiển thị ở trạng thái default (Hình 5)
}

@Component({
  selector: 'app-beauty-preference',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule để dùng ngModel
  templateUrl: './beauty-preference.html',
  styleUrls: ['./beauty-preference.css'],
})
export class BeautyPreferenceComponent implements OnInit, OnDestroy {
  // --- Data cho các Filter Group ---
  filterGroups: FilterGroup[] = [];

  // --- Trạng thái Overlay Brands ---
  isBrandOverlayOpen: boolean = false;
  brandSearchQuery: string = '';
  filteredBrands: { [key: string]: string[] } = {}; // Brands sau khi search

  // Data brands cho overlay (giống như brand-list)
  allBrands: { [key: string]: string[] } = {
    A: ['Ami Cole', 'Armani Beauty', 'ABH', 'Artist Couture'],
    B: ['Basma', 'Beautyblender', 'Bobbi Brown'],
    C: ['Charlotte Tilbury', 'Clarins', 'Clinique'],
    D: ['Dior'],
    F: ['Fenty Beauty', 'Freck Beauty'],
    G: ['Givenchy', 'Glossier', 'Grande Cosmetics', 'Gucci', 'Guerlain'],
    H: ['Haus Labs', 'Hourglass'],
    I: ['IT Cosmetics'],
    K: ['Kosas', 'Kulfi'],
    L: ['Lancôme'],
    M: ['Make Up For Ever', 'Makeup By Mario', 'Melt Cosmetics', 'Merit', 'Milk Makeup'],
    N: ['Nars', 'Natasha Denona'],
    P: ['Pat McGrath Labs', 'Patrick Ta'],
    S: ['Shiseido', 'Shu Uemura', 'Sulwhasoo'],
    T: ['Tarte', 'Too Faced', 'Tower 28 Beauty'],
    Y: ['Yves Saint Laurent'],
  };
  selectedBrands: string[] = []; // Các brands đã chọn từ overlay

  constructor() {}

  ngOnInit(): void {
    this.initializeFilterGroups();
    this.filterBrands(); // Khởi tạo filteredBrands ban đầu
  }

  ngOnDestroy(): void {
    // Cleanup nếu cần
  }

  // --- HostListener để đóng overlay khi click bên ngoài (và xử lý responsive) ---
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    // Logic đóng overlay khi click bên ngoài sẽ phức tạp hơn
    // và cần truy cập DOM element. Tạm thời, chúng ta sẽ quản lý bằng nút đóng.
    // Hoặc kiểm tra event.target và event.currentTarget
  }

  // --- Khởi tạo các nhóm filter ---
  initializeFilterGroups(): void {
    this.filterGroups = [
      {
        id: 'skinType',
        label: 'Loại Da',
        type: 'single-select',
        options: [
          { value: 'oily', label: 'Da Dầu', selected: false },
          { value: 'dry', label: 'Da Khô', selected: false },
          { value: 'combination', label: 'Da Hỗn Hợp', selected: false },
          { value: 'sensitive', label: 'Da Nhạy Cảm', selected: false },
        ],
        isExpanded: false,
        selectedDisplay: '',
      },
      {
        id: 'skinTone',
        label: 'Màu Da',
        type: 'single-select',
        options: [
          { value: 'dark', label: 'Tông Da Tối', selected: false },
          { value: 'medium', label: 'Tông Da Trung Bình', selected: false },
          { value: 'light', label: 'Tông Da Sáng', selected: false },
          { value: 'notSure', label: 'Không Chắc', selected: false },
        ],
        isExpanded: false,
        selectedDisplay: '', // Mặc định trống
      },

      {
        id: 'eyeColor',
        label: 'Màu Mắt',
        type: 'single-select',
        options: [
          { value: 'black', label: 'Mắt Đen', selected: false },
          { value: 'brown', label: 'Mắt Nâu', selected: false },
          { value: 'blue', label: 'Mắt Xanh', selected: false },
          { value: 'green', label: 'Mắt Lục', selected: false },
        ],
        isExpanded: false,
        selectedDisplay: '',
      },
      {
        id: 'ingredients',
        label: 'Nguyên Liệu',
        type: 'multi-select', // Ví dụ: multi-select
        options: [
          { value: 'thuanchay', label: 'Thuần Chay', selected: false },
          { value: 'khongchuagluten', label: 'Không Chứa GLuten', selected: false },
          { value: 'khonghuonglieu', label: 'Không Hương Liệu', selected: false },
          { value: 'khongpareben', label: 'Không Paraben', selected: false },
        ],
        isExpanded: false,
        selectedDisplay: '',
      },
      {
        id: 'brand',
        label: 'Thương Hiệu',
        type: 'brand-search',
        isExpanded: false,
        selectedDisplay: '',
      },
      // Thêm các nhóm khác tương tự
    ];
  }

  // --- Toggle mở/đóng từng nhóm filter ---
  toggleExpand(group: FilterGroup, event: Event): void {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    this.filterGroups.forEach((g) => {
      if (g.id !== group.id) {
        g.isExpanded = false; // Đóng các nhóm khác
      }
    });
    group.isExpanded = !group.isExpanded; // Mở/đóng nhóm hiện tại

    // Nếu là nhóm Brand và đang mở, mở overlay tìm kiếm
    if (group.id === 'brand' && group.isExpanded && group.type === 'brand-search') {
      this.isBrandOverlayOpen = true;
      this.brandSearchQuery = ''; // Reset search
      this.filterBrands(); // Cập nhật lại danh sách brands
    }
  }

  // --- Xử lý click chọn option ---
  selectOption(group: FilterGroup, option: FilterOption): void {
    if (group.type === 'single-select') {
      group.options?.forEach((opt) => (opt.selected = false)); // Bỏ chọn tất cả
      option.selected = true; // Chọn option mới
      group.selectedDisplay = option.label; // Cập nhật hiển thị (Hình 5)
      group.isExpanded = false; // Đóng sau khi chọn
    } else if (group.type === 'multi-select') {
      option.selected = !option.selected; // Bật/tắt chọn

      // === SỬA LỖI TS2322 TẠI ĐÂY ===
      // Thêm '?? ""' (nullish coalescing) ở cuối
      // để nếu vế trái là undefined, nó sẽ trả về một string rỗng.
      group.selectedDisplay =
        group.options
          ?.filter((opt) => opt.selected)
          .map((opt) => opt.label)
          .join(', ') ?? ''; // <-- Thêm ?? '' vào đây
    }
    // Sau khi chọn xong có thể emit event để cha biết và filter sản phẩm
    console.log(`Selected in ${group.label}:`, option.label);
  }

  // --- Logic cho Brand Search Overlay (Hình 3 & 4) ---
  openBrandOverlay(): void {
    this.isBrandOverlayOpen = true;
    this.brandSearchQuery = ''; // Reset search
    this.filterBrands(); // Cập nhật lại danh sách brands
  }

  closeBrandOverlay(): void {
    this.isBrandOverlayOpen = false;
  }

  // Hàm filter brands theo brandSearchQuery
  filterBrands(): void {
    this.filteredBrands = {};
    const query = this.brandSearchQuery.toLowerCase();

    for (const letter in this.allBrands) {
      if (this.allBrands.hasOwnProperty(letter)) {
        const brandsForLetter = this.allBrands[letter].filter((brand) =>
          brand.toLowerCase().includes(query)
        );
        if (brandsForLetter.length > 0) {
          this.filteredBrands[letter] = brandsForLetter;
        }
      }
    }
  }

  // Chọn brand từ overlay
  toggleSelectBrand(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1); // Bỏ chọn
    } else {
      this.selectedBrands.push(brand); // Chọn
    }
    this.updateBrandSelectedDisplay();
  }

  // Áp dụng lựa chọn brand và đóng overlay
  applyBrandSelection(): void {
    this.updateBrandSelectedDisplay();
    this.closeBrandOverlay();
    // Có thể emit event với selectedBrands để component cha xử lý filter
    console.log('Selected Brands:', this.selectedBrands);
  }

  // Cập nhật text hiển thị cho Brand filter group
  updateBrandSelectedDisplay(): void {
    const brandGroup = this.filterGroups.find((g) => g.id === 'brand');
    if (brandGroup) {
      if (this.selectedBrands.length > 0) {
        brandGroup.selectedDisplay = this.selectedBrands.join(', ');
      } else {
        brandGroup.selectedDisplay = '';
      }
    }
  }
  // === HÀM MỚI CHO NÚT ÁP DỤNG TỔNG ===
  onSaveAllPreferences(): void {
    // Thu thập tất cả các lựa chọn
    const preferences = {
      skinTone: this.filterGroups.find((g) => g.id === 'skinTone')?.selectedDisplay,
      skinType: this.filterGroups.find((g) => g.id === 'skinType')?.selectedDisplay,
      eyeColor: this.filterGroups.find((g) => g.id === 'eyeColor')?.selectedDisplay,
      ingredients: this.filterGroups
        .find((g) => g.id === 'ingredients')
        ?.options?.filter((o) => o.selected)
        .map((o) => o.label),
      brands: this.selectedBrands, // Biến này đã được theo dõi
    };

    console.log('ĐANG LƯU TẤT CẢ LỰA CHỌN:', preferences);
    // Tại đây, bạn có thể emit(preferences) ra component cha
    // hoặc gọi một service để lưu vào backend
  }
}
