export default function(){  
  this.transition(
    this.fromRoute('show'),
    this.toRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
