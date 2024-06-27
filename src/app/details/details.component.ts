import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  readonly formApply = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.formApply.value.firstName ?? '',
      this.formApply.value.lastName ?? '',
      this.formApply.value.email ?? ''
    );
  }
}
