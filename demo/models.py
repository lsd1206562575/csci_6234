import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

from tyadmin_api_cli.fields import richTextField


class Symptom(models.Model):
    symptom = models.CharField(max_length=20, verbose_name="Symptom")
    time = models.DateTimeField(verbose_name="Time")
    description = models.TextField(blank=True, verbose_name="Description")

    class Meta:
        verbose_name = "Symptom"

    def __str__(self):
        return str(self.symptom)


class Medicine(models.Model):
    medicine = models.CharField(max_length=20, verbose_name="Medicine name")
    time = models.DateTimeField(verbose_name="Time")
    serving = models.TextField(blank=True, verbose_name="Serving")

    class Meta:
        verbose_name = "Medicine"

    def __str__(self):
        return str(self.medicine)


class Doctor_visit(models.Model):
    doctor_visit = models.CharField(max_length=20, verbose_name="Event")
    time = models.DateField(verbose_name="Appointment date")
    description = models.TextField(verbose_name="Description")

    class Meta:
        verbose_name = "Doctor visit"

    def __str__(self):
        return str(self.doctor_visit)


class Trip(models.Model):
    place = models.CharField(max_length=20, verbose_name="Place")
    start_time = models.DateField(verbose_name="Start date")
    end_time = models.DateField(verbose_name="End date")
    description = models.TextField(blank=True, verbose_name="Description")

    class Meta:
        verbose_name = "Trip"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.place)


class News_info(models.Model):
    description = models.TextField(verbose_name="Description")
    start_time = models.DateTimeField(verbose_name="Time")

    class Meta:
        verbose_name = "News"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.description)


class Take_out(models.Model):
    take_out = models.CharField(max_length=20, verbose_name="Take out food")
    start_time = models.DateTimeField(verbose_name="Time")
    restaurant = models.CharField(max_length=50, verbose_name="Restaurant")

    class Meta:
        verbose_name = "Take out food"

    def __str__(self):
        return str(self.take_out)


class DemoForeignKey(models.Model):
    name = models.CharField(max_length=10, blank=True, verbose_name="CharField列")
    number = models.IntegerField(blank=True, verbose_name="CharField列")
    float_number = models.FloatField(blank=True, verbose_name="FloatField")
    image = models.ImageField(blank=True, verbose_name="ImageField")
    file = models.FileField(blank=True, verbose_name="FileField")
    bool = models.BooleanField(blank=True, verbose_name="BooleanField")
    text = models.TextField(blank=True, verbose_name="TextField")

    class Meta:
        verbose_name = "全部字段非必填"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.number) + "-" + str(self.name)


class Tags(models.Model):
    code = models.CharField(max_length=10, blank=True, verbose_name="code")
    name = models.CharField(max_length=10, blank=True, verbose_name="标签名")

    class Meta:
        verbose_name = "标签[被多对多关联]"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code + "-" + self.name


class Category(models.Model):
    code = models.CharField(max_length=10, blank=True, verbose_name="分类code")
    name = models.CharField(max_length=10, blank=True, verbose_name="分类名")

    class Meta:
        verbose_name = "分类[被外键关联]"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code + "-" + self.name


class RichTextDemo(models.Model):
    name = models.CharField(max_length=10, verbose_name="标题")
    user = models.ForeignKey('UserProfile', on_delete=models.CASCADE, verbose_name="作者")
    content = richTextField(verbose_name="内容")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="分类")
    tags = models.ManyToManyField(Tags, verbose_name="标签")

    class Meta:
        verbose_name = "富文本示例[关联外键，多对多标签]"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class DemoModelRequire(models.Model):
    GENDER_CHOICES = (
        ("mode1", "模式1"),
        ("mode2", "模式2")
    )
    INT_CHOICES = (
        (1, "男"),
        (2, "女"),
        (3, "保密"))
    name = models.CharField(choices=GENDER_CHOICES, max_length=10, verbose_name="CharField列")
    number = models.IntegerField(choices=INT_CHOICES, verbose_name="IntegerField列")

    class Meta:
        verbose_name = "下拉选择示例(choices)"
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.number) + "-" + str(self.name)


class DemoModel(models.Model):
    char_field = models.CharField(max_length=10, verbose_name="CharField列")
    number_field = models.IntegerField(verbose_name="IntegerField列")
    float_number_field = models.FloatField(verbose_name="FloatField列")
    image_field = models.ImageField(verbose_name="ImageField列")
    file_field = models.FileField(verbose_name="FileField列")
    bool_field = models.BooleanField(verbose_name="BooleanField列")
    text_field = models.TextField(verbose_name="TextField列")
    date_field = models.DateField(verbose_name="DateField列")
    date_time_field = models.DateTimeField(verbose_name="DateTimeField列")
    foreign_key_field = models.ForeignKey(DemoForeignKey, on_delete=models.CASCADE, verbose_name="关联外键")

    class Meta:
        verbose_name = "全部字段类型-必填"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.char_field


class DemoDefaultModel(models.Model):
    default_char_field = models.CharField(default="tyadmin", max_length=10, verbose_name="Char默认值")
    default_number_field = models.IntegerField(default=2020, verbose_name="Integer默认值")
    default_float_number_field = models.FloatField(default=0.1, verbose_name="Float默认值")
    default_bool_field = models.BooleanField(default=True, verbose_name="Boolean默认值")
    default_text_field = models.TextField(default="一大段文字", verbose_name="Text默认值")
    date_field = models.DateField(default=datetime.date.today, verbose_name="Date默认值")
    date_time_field = models.DateTimeField(default=datetime.datetime.now, verbose_name="DateTime默认值")

    class Meta:
        verbose_name = "全部字段类型-提供默认值"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.default_char_field


class UserProfile(AbstractUser):
    GENDER_CHOICES = (
        ("male", "male"),
        ("female", "male")
    )

    gender = models.CharField(max_length=6, verbose_name="gender", choices=GENDER_CHOICES, default="female")
    image = models.ImageField(max_length=100, verbose_name="Profile Photo")

    class Meta:
        verbose_name = "UserProfile"

    def __str__(self):
        return self.username
