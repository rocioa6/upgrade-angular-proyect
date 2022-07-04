import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent implements OnInit {
  public characterForm!: FormGroup;
  public newCharacter = this.charactersService.characterData;
  public characterID = this.charactersService.characterData.id;

  constructor(
    private formBuilder: FormBuilder,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.charactersService.clearCharacter();

    this.characterForm = this.formBuilder.group({
      name: [
        this.newCharacter.name,
        [Validators.required, Validators.minLength(2)],
      ],
      job: [this.newCharacter.job, [Validators.required]],
      origin: [this.newCharacter.origin, [Validators.required]],
      picture: [this.newCharacter.picture, [Validators.required]],
    });

    this.characterForm.valueChanges.subscribe((changes) => {
      this.newCharacter = changes;
      console.log(this.newCharacter);
    });
  }
  public onSubmit() {
    if (this.characterID !== '') {
      this.charactersService
        .editCharacter(this.characterID, this.newCharacter)
        .subscribe();
      Swal.fire('Character succesfully edited');
    } else {
      this.charactersService.postCharacter(this.newCharacter).subscribe();
      Swal.fire('Character succesfully created');
    }
    this.characterForm.reset();
    this.router.navigate(['/characters']);
  }
  public delete() {
    /* this.charactersService.deleteCharacter(this.characterID).subscribe();
    this.characterForm.reset();
    Swal.fire('Character succesfully deleted');
    this.router.navigate(['/characters']) */
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will erase the character',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'I want to delete it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.charactersService.deleteCharacter(this.characterID).subscribe();
        this.characterForm.reset();
        Swal.fire('Deleted!', 'Your character has been deleted.', 'success');
        this.router.navigate(['/characters']);
      }
    });
  }
}
